const db = require('../models');

// Get All Categories
exports.findAll = async (req, res) => {
  const categories = await db.Category.findAll();
  res.json(categories);
};

// Get category by id
exports.findOne = async (req, res) => {
  const category = await db.Category.findByPk(req.params.id);
  res.json(category);
};

// Get all tutorials by category
exports.tutorialsByCategory = async (req, res) => {
  const tutorials = await db.Tutorial.findAll({
    where: {
      CategoryId: req.params.id,
    },
    include: [db.User, db.Category],
  });
  res.json(tutorials);
};


// Create a category
exports.create = async (req, res) => {
  const category = new db.Category({ name: req.body.name });
  try {
    await category.save();
    res.status(201).json(category);
  } catch (e) {
    console.log('error: ', e);
  }
};

// Update a category
exports.update = async (req, res) => {
  const category = db.Category.findByPk(req.params.category_id);
  category.name = req.user.name;
  try {
    await category.save();
    res.status(201).json(category);
  } catch (e) {
    console.log('error: ', e);
  }
};

// Delete a category
exports.delete = async (req, res) => {
  const category = await db.Category.findByPk(req.params.id);
  try {
    await category.destroy();
    res.status(200).json(category);
  } catch (e) {
    console.log('error: ', e);
  }
};

exports.tutorialCountByCategory = async (req, res) => {
  const category = await db.Category.findByPk(req.params.id);
  try {
    db.Tutorial.count({ where: { CategoryId: req.params.id } }).then(c => {
      res.json(c);
    });
  } catch (e) {
    console.log('error: ', e);
  }
};
