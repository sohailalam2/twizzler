const env = process.env.NODE_ENV;

export default {
  ENV: env,
  API_URL: env === 'production'
    ? `${window.location.protocol}//${window.location.hostname}:9090`
    : 'http://localhost:9090',
};
