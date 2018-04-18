const express = require('express');
const tweets = require('../controllers/tweets');

const router = express.Router();

router.get('/', tweets.getAllTweets);

router.post('/', tweets.postTweet);

router.put('/:id/like', tweets.likeTweet);

router.put('/:id/reply', tweets.replyTweet);

module.exports = router;
