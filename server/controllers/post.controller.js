const postModel = require('../models/post.model');

//* CREATE

const createPost = async (req, res, next) => {
  try {
    const createPost = await postModel.create({
      ...req.body,
      name: req.session.user.name,
    });
    res.status(201).json(createPost);
  } catch (err) {
    next(err);
  }
};

//* READ
const readPost = async (req, res, next) => {
  try {
    const readPost = await postModel.find({});
    res.status(200).json(readPost);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createPost,
  readPost,
};
