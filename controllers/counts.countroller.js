const db = require('../models');

// Total Views
exports.totalViews = async (req, res) => {
  db.Tutorial.sum('views').then((viewsCount) => {
    res.json(viewsCount || 0);
  });
};

// Total Tutorials
exports.totalTutorials = async (req, res) => {
  db.Tutorial.count().then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

// Total Users
exports.totalUsers = async (req, res) => {
  db.User.count().then((userCount) => {
    res.json(userCount || 0);
  });
};

// Mongo Tutorials
exports.mongoTutorialCount = async (req, res) => {
  db.Tutorial.count({ where: { categoryId: 1 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

exports.mongoTutorialViews = async (req, res) => {
  db.Tutorial.sum('views', { where: { categoryId: 1 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

// Express Tutorials
exports.expressTutorialCount = async (req, res) => {
  db.Tutorial.count({ where: { categoryId: 2 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

exports.expressTutorialViews = async (req, res) => {
  db.Tutorial.sum('views', { where: { categoryId: 2 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

// React Tutorials
exports.reactTutorialCount = async (req, res) => {
  db.Tutorial.count({ where: { categoryId: 3 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

exports.reactTutorialViews = async (req, res) => {
  db.Tutorial.sum('views', { where: { categoryId: 3 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

// Nodejs Tutorials
exports.nodejsTutorialCount = async (req, res) => {
  db.Tutorial.count({ where: { categoryId: 4 } }).then((tutorialCount) => {
    res.json(tutorialCount || 0);
  });
};

exports.nodejsTutorialViews = async (req, res) => {
  db.Tutorial.sum('views', { where: { categoryId: 4 } }).then((tutorialCount) => {
    console.log('nodejs:', tutorialCount);
    res.json(tutorialCount || 0);
  });
};
