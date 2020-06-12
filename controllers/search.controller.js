const db = require('../models');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

// Get All Tutorials
exports.search = async (req, res) => {
  let tutorials = {};

  if (req.query.categoryId) {
    tutorials = await db.Tutorial.findAll({
      where: [
        { CategoryId: req.query.categoryId },
        { title: { [Op.like]: `%${req.query.q}%` } },
      ],
    });
  } else {
    tutorials = await db.Tutorial.findAll({
      where: { title: { [Op.like]: `%${req.query.q}%` } },
    });
  }
  res.json(tutorials);
};
