const { default: mongoose } = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'post',
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
