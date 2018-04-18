module.exports = (db) => {
  let users = db.getCollection('users');

  if (users === null) {
    users = db.addCollection('users');
  }

  const findById = id => users.findOne({ id });

  const findOrCreate = (user) => {
    const found = findById(user.id);
    if (found) {
      return found;
    }
    return users.insertOne(user);
  };

  return {
    findById,
    findOrCreate,
  };
};
