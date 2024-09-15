const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate([
    { username: 'User1', email: 'user1@example.com', password: 'password123' },
    { username: 'User2', email: 'user2@example.com', password: 'password123' },
  ], {
    individualHooks: true,
  });

  const posts = await Post.bulkCreate([
    { title: 'First Post', content: 'This is the first post.', userId: 1 },
    { title: 'Second Post', content: 'This is the second post.', userId: 2 },
  ]);

  await Comment.bulkCreate([
    { content: 'Great post!', userId: 1, postId: 2 },
    { content: 'Thanks for sharing!', userId: 2, postId: 1 },
  ]);

  process.exit(0);
};

seedDatabase();
