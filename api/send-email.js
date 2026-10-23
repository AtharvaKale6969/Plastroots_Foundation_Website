import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
  },
});

const SENDER = "Plastroots Foundation <admin@sarvayagroup.com>";
const TO_ADDRESS = "impact@plastrootsfoundation.org";
const BCC_ADDRESS = "kaleatharva3@gmail.com";

function buildEmailBody(formType, fields) {
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  if (formType === "contact") {
    return {
      subject: `New Contact Form Submission from ${fields.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${fields.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${fields.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Mobile</td><td style="padding:8px;border:1px solid #ddd">${fields.mobile}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${fields.message}</td></tr>
        </table>
        <p style="color:#888;font-size:12px">Submitted on ${timestamp}</p>
      `,
    };
  }

  if (formType === "volunteer") {
    return {
      subject: `New Volunteer Sign-up from ${fields.fullName}`,
      html: `
        <h2>New Volunteer Sign-up</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Full Name</td><td style="padding:8px;border:1px solid #ddd">${fields.fullName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${fields.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${fields.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${fields.message}</td></tr>
        </table>
        <p style="color:#888;font-size:12px">Submitted on ${timestamp}</p>
      `,
    };
  }

  if (formType === "csr") {
    return {
      subject: `New CSR Partnership Inquiry from ${fields.fullName} (${fields.company})`,
      html: `
        <h2>New CSR Partnership Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Full Name</td><td style="padding:8px;border:1px solid #ddd">${fields.fullName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${fields.company}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${fields.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${fields.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Inquiry</td><td style="padding:8px;border:1px solid #ddd">${fields.inquiry}</td></tr>
        </table>
        <p style="color:#888;font-size:12px">Submitted on ${timestamp}</p>
      `,
    };
  }

  return { subject: "New Form Submission", html: `<pre>${JSON.stringify(fields, null, 2)}</pre>` };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { formType, fields } = req.body;

  if (!formType || !fields) {
    return res.status(400).json({ error: "Missing formType or fields" });
  }

  const { subject, html } = buildEmailBody(formType, fields);

  const params = {
    Source: SENDER,
    Destination: {
      ToAddresses: [TO_ADDRESS],
      BccAddresses: [BCC_ADDRESS],
    },
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: { Html: { Data: html, Charset: "UTF-8" } },
    },
  };

  try {
    await ses.send(new SendEmailCommand(params));
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SES Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
