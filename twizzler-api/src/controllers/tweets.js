const db = require('../utils/db');

exports.getAllTweets = async (req, res) => {
  const tweets = await db.tweets.findAll();

  res.json({ status: 'OK', data: tweets });
};

exports.postTweet = async (req, res) => {
  const { comment, userId, name } = req.body;
  const tweet = await db.tweets.createTweet({ comment, userId, name });

  res.json({ status: 'OK', data: tweet });
};

exports.likeTweet = async (req, res) => {
  const tweetId = req.params.id;
  const tweet = await db.tweets.likeTweet(tweetId);

  res.json({ status: 'OK', data: tweet });
};

exports.replyTweet = async (req, res) => {
  const tweetId = req.params.id;
  const { reply, userId } = req.body;
  const tweet = await db.tweets.replyToTweet(tweetId, { userId, comment: reply });

  res.json({ status: 'OK', data: tweet });
};

