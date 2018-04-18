const express = require('express');
const auth = require('../controllers/auth');
const tweets = require('../controllers/tweets');
const sse = require('../utils/sse');

const router = express.Router();

router.get('/', auth.isAuthenticated, tweets.getAllTweets);

router.get('/stream', sse.init);

router.post('/', auth.isAuthenticated, tweets.postTweet);

router.put('/:id/like', auth.isAuthenticated, tweets.likeTweet);

router.put('/:id/reply', auth.isAuthenticated, tweets.replyTweet);

module.exports = router;
