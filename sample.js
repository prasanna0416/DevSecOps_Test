const crypto = require('crypto');

function insecureHash(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

const userInputPassword = 'secretPassword123';
const hashedPassword = insecureHash(userInputPassword);
console.log('Hashed password:', hashedPassword);
