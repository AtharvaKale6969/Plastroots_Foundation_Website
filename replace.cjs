const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules') filelist = walkSync(filePath, filelist);
    } else if (file.endsWith('.jsx') || file.endsWith('.css')) {
      filelist.push(filePath);
    }
  });
  return filelist;
};

const files = walkSync('D:\\\\Plastroots_Foundation_Website\\\\src');
const str1 = 'linear-gradient(to bottom, rgba(31, 44, 51, 0.6), rgba(9, 102, 153, 0.7))';
const str2 = 'linear-gradient(to bottom, rgba(31, 44, 51, 0.7), rgba(9, 102, 153, 0.8))';
const replacement = 'linear-gradient(135deg, rgba(9, 102, 153, 0.3), rgba(6, 75, 115, 0.4))';

let replacedCount = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = false;
  if (content.includes(str1)) {
    content = content.split(str1).join(replacement);
    updated = true;
  }
  if (content.includes(str2)) {
    content = content.split(str2).join(replacement);
    updated = true;
  }
  if (updated) {
    fs.writeFileSync(file, content);
    replacedCount++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Total files updated: ${replacedCount}`);
