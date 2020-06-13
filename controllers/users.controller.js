const bcrypt = require('bcryptjs');
const db = require('../models');

// Get All Tutorials
exports.findAll = async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
};

// Get All Users By Category
exports.findOne = async (req, res) => {
  const user = await db.User.findOne({
    where: { id: req.params.id },
  });
  res.json(user);
};

// Get all tutorials by category
exports.tutorialsByUser = async (req, res) => {
  const tutorials = await db.Tutorial.findAll({
    where: {
      UserId: req.params.id,
    },
    include: [db.User, db.Category],
  });
  res.json(tutorials);
};

// Create A User
exports.create = async (req, res) => {
  const candidate = await db.User.findOne({ where: { email: req.body.email } });
  if (candidate) {
    res.json({
      success: false,
      message: 'This email is already taken. Try logging in.',
    });
  } else {
    const salt = await bcrypt.genSaltSync(10);
    const password = await req.body.password;
    const user = new db.User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.json(user);
    } catch (e) {
      console.log('error: ', e);
    }
  }
};

exports.update = async (req, res) => {
  const user = db.User.findByPk(req.params.id);
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.log('error: ', e);
  }
};

exports.delete = async (req, res) => {
  const user = await db.User.findByPk(req.params.id);

  try {
    await user.destroy();
    res.status(200).json(user);
  } catch (e) {
    console.log('error: ', e);
  }
};

