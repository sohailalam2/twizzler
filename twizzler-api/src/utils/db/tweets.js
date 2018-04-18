const tweetSchema = require('./schema/tweetSchema');

module.exports = (db) => {
  const users = db.getCollection('users');
  let tweets = db.getCollection('tweets');

  if (tweets === null) {
    tweets = db.addCollection('tweets');
  }

  const findAll = async () => {
    let allTweets = tweets.find({ });
    if (allTweets && !Array.isArray(allTweets)) {
      allTweets = [allTweets];
    }
    return allTweets;
  };

  const createTweet = async (tweet) => {
    const found = tweets.findOne({ comment: tweet.comment, userId: tweet.userId });
    if (!found) {
      const data = await tweetSchema.validate(tweet);

      return tweets.insert(data);
    }
    throw new Error('A similar tweet already exists');
  };

  const likeTweet = async (id) => {
    const found = tweets.findOne({ id });
    if (found) {
      found.likes += 1;
      return tweets.update(found);
    }
    throw new Error('No such tweet exists');
  };

  const replyToTweet = async (id, reply) => {
    const found = tweets.findOne({ id });
    if (found) {
      const user = users.findOne({ id: reply.userId });
      if (!found.replies) found.replies = [];
      found.replies.push({ ...reply, name: user.name });

      return tweets.update(found);
    }
    throw new Error('No such tweet exists');
  };

  return {
    findAll,
    createTweet,
    likeTweet,
    replyToTweet,
  };
};
