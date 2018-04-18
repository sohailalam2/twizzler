const express = require('express');
const auth = require('../controllers/auth');
const tweets = require('../controllers/tweets');

const router = express.Router();

router.get('/', auth.isAuthenticated, tweets.getAllTweets);

router.post('/', auth.isAuthenticated, tweets.postTweet);

router.put('/:id/like', auth.isAuthenticated, tweets.likeTweet);

router.put('/:id/reply', auth.isAuthenticated, tweets.replyTweet);

module.exports = router;
