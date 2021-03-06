const db = require('../utils/db');
const sse = require('../utils/sse');

exports.getAllTweets = async (req, res) => {
  const tweets = await db.tweets.findAll();

  res.json({ status: 'OK', data: tweets });
};

exports.postTweet = async (req, res) => {
  const user = req.user;
  const comment = req.body.comment;
  const tweet = await db.tweets.createTweet({ comment, userId: user.id, name: user.name });

  sse.send(tweet, 'tweet');
  res.json({ status: 'OK', data: tweet });
};

exports.likeTweet = async (req, res) => {
  const tweetId = req.params.id;
  const tweet = await db.tweets.likeTweet(tweetId);

  sse.send(tweet, 'like');
  res.json({ status: 'OK', data: tweet });
};

exports.replyTweet = async (req, res) => {
  const user = req.user;
  const tweetId = req.params.id;
  const { reply } = req.body;
  const tweet = await db.tweets.replyToTweet(tweetId, { userId: user.id, comment: reply });

  sse.send(tweet, 'reply');
  res.json({ status: 'OK', data: tweet });
};

