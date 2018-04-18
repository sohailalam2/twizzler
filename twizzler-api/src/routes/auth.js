const express = require('express');
const auth = require('../controllers/auth');

const router = express.Router();

router.get('/login', auth.handleGithubOAuthLogin);

router.get('/github/callback', auth.handleGithubOAuthCallback);

module.exports = router;
