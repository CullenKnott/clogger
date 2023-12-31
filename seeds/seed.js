const sequalize = require("../config/connection");
const { User, Blog } = require("../models");

const userData = require("./userData");
const blogData = require("./blogData");

const seedDatabase = async () => {
  await sequalize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
