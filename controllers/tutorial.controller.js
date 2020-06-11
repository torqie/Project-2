const db = require('../models');

// Get All Tutorials
exports.findAll = async (req, res) => {
  if (req.params.category_id) {
    const tutorials = await db.Tutorial.findAll({
      where: {
        category_id: req.params.category_id,
      },
    });
  } else {
    const tutorials = await db.Tutorial.findAll();
  }
  res.json(tutorials);
};

// Get All Tutorials By Category
exports.findOne = async (req, res) => {
  const tutorial = await db.Tutorial.findByPk(req.params.id);
  res.json(tutorial);
};

// Get All Tutorials By Category
exports.create = async (req, res) => {
  const tutorial = new db.Tutorial({
    user_id: req.user.id,
    category_id: req.body.category_id,
    title: req.body.title,
    content: req.body.content,
  });
  try {
    await tutorial.save();
    res.status(201).json(tutorial);
  } catch (e) {
    console.log('error: ', e);
  }
};

exports.create = async (req, res) => {
  const tutorial = db.Tutorial.findByPk(req.params.category_id);
  tutorial.user_id = req.user.id;
  tutorial.category_id = req.body.category_id;
  tutorial.title = req.body.title;
  tutorial.content = req.body.content;
  try {
    await tutorial.save();
    res.status(201).json(tutorial);
  } catch (e) {
    console.log('error: ', e);
  }
};

exports.delete = async (req, res) => {
  const tutorial = db.Tutorial.findByPk(req.params.category_id);

  try {
    await tutorial.destroy();
    res.status(200).json(tutorial);
  } catch (e) {
    console.log('error: ', e);
  }
};

