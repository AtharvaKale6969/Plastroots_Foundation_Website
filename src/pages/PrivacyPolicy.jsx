import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck } from 'lucide-react';
import styles from './LegalPage.module.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Privacy Policy - Plastroots Foundation</title>
        <meta name="description" content="Privacy Policy of Plastroots Foundation. Learn how we collect, use, and protect your personal data." />
      </Helmet>

      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ShieldCheck size={52} className={styles.heroIcon} />
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>
            Your privacy matters to us. This policy explains how Plastroots Foundation handles your personal data.
          </p>
        </motion.div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last Updated: 27 October 2026</p>

          <div className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Plastroots Foundation ("we", "our", or "us") is a registered non-profit organisation based in Nagpur, Maharashtra, India. We are committed to protecting the privacy and security of your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable Indian laws.
            </p>
            <p>
              This Privacy Policy applies to all personal data collected through our website (plastrootsfoundation.org), including our donation, volunteer, CSR partnership, and contact forms.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Data We Collect</h2>
            <p>We collect the following personal data when you interact with our website:</p>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Form</th>
                    <th>Data Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Donation Form</td>
                    <td>Full name, mobile number, email address, PAN card number, donation amount, payment mode</td>
                  </tr>
                  <tr>
                    <td>Volunteer Form</td>
                    <td>Full name, email address, phone number, area of interest, message</td>
                  </tr>
                  <tr>
                    <td>CSR Partnership Form</td>
                    <td>Contact person name, company name, email address, phone number, message</td>
                  </tr>
                  <tr>
                    <td>Contact Us Form</td>
                    <td>Full name, email address, phone number, subject, message</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We do not collect any data automatically through cookies, tracking scripts, or analytics tools beyond what is necessary for the website to function.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Purpose of Data Collection</h2>
            <p>Your personal data is collected and processed for the following purposes:</p>
            <ul>
              <li><strong>Donation Processing:</strong> To acknowledge your donation, issue receipts, and comply with tax and regulatory requirements under the Income Tax Act, 1961. PAN card details are collected as required for donations eligible for tax exemption under Section 80G.</li>
              <li><strong>Volunteer Coordination:</strong> To communicate with you regarding volunteer opportunities and activities.</li>
              <li><strong>CSR Partnerships:</strong> To respond to partnership inquiries and coordinate CSR project collaborations.</li>
              <li><strong>General Inquiries:</strong> To respond to questions and feedback submitted through the Contact Us form.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>4. Legal Basis for Processing</h2>
            <p>
              Under the DPDP Act, 2023, we process your personal data based on your consent, which you provide when you voluntarily submit information through our forms. For donation-related data, processing is also necessary for compliance with legal obligations under Indian tax laws.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. How We Use Your Data</h2>
            <ul>
              <li>We use your data only for the specific purpose for which it was collected.</li>
              <li>We do not sell, rent, or trade your personal data to any third party.</li>
              <li>We do not use your data for marketing purposes unless you have given explicit consent.</li>
              <li>Form submissions are sent via email to our team using Amazon Web Services Simple Email Service (AWS SES). AWS processes this data as a service provider and does not use it for any other purpose.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>6. Data Storage and Security</h2>
            <p>
              We take reasonable security measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. These include:
            </p>
            <ul>
              <li>Encrypted data transmission using HTTPS/SSL on our website.</li>
              <li>Restricted access to personal data within our organisation on a need-to-know basis.</li>
              <li>Secure email transmission through AWS SES with encryption in transit.</li>
            </ul>
            <p>
              Your data is retained only for as long as necessary to fulfill the purpose for which it was collected, or as required by law. Donation records are retained as per Income Tax Act requirements.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Your Rights</h2>
            <p>Under the DPDP Act, 2023, you have the following rights as a Data Principal:</p>
            <ul>
              <li><strong>Right to Access:</strong> You can request a summary of your personal data that we hold and the processing activities related to it.</li>
              <li><strong>Right to Correction:</strong> You can request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent at any time. Withdrawal of consent will not affect the lawfulness of processing done before the withdrawal.</li>
              <li><strong>Right to Grievance Redressal:</strong> You can raise concerns about our data processing practices.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided in Section 10 below.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites and social media platforms (Instagram, LinkedIn, Facebook). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal data.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className={styles.section}>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, wish to exercise your data rights, or want to raise a grievance, please contact us:
            </p>
            <div className={styles.contactBox}>
              <p><strong>Plastroots Foundation</strong></p>
              <p>Plot no 12A, 1st Floor, Smruti Nagar Rd, Smruti Nagar, Koradi, Bokara, Nagpur, Maharashtra 441111</p>
              <p>Email: <a href="mailto:impact@plastrootsfoundation.org">impact@plastrootsfoundation.org</a></p>
              <p>Phone: <a href="tel:+917249791152">+91 72497 91152</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
