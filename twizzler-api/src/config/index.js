const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CALLBACK_URL } = process.env;
let { NODE_ENV, PORT, HOST, WEB_URL, SECRET } = process.env;

/* Default Values */
if (!NODE_ENV) NODE_ENV = 'development';
if (!PORT) PORT = 9090;
if (!HOST) HOST = '0.0.0.0';
if (!WEB_URL) WEB_URL = 'http://localhost:8080';
if (!SECRET) SECRET = 'mysupersecretsecret';

function normalizePort(val) {
  const tempPort = parseInt(val, 10);
  if (isNaN(tempPort)) return val;
  if (tempPort >= 0) return tempPort;
  return false;
}

PORT = normalizePort(PORT);

module.exports = {
  NODE_ENV,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL,
  PORT,
  HOST,
  WEB_URL,
  SECRET,
};
