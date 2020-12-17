const User = require('./../Models/userModel');

exports.addUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name });
    if (!user) throw name;
    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    try {
      const name = err;
      if (name.length < 5) throw new Error();
      const user = await User.create({ name });
      res.status(200).json({
        status: 'success',
        user,
      });
    } catch (error) {
      res.status(404).json({
        status: 'fail',
      });
    }
  }
};
exports.getPosts = async (req, res, next) => {
  try {
    const { id } = req.body;
    const posts = await User.findOne(id).select({ dairy: 1 });
    res.status(200).json({
      status: 'success',
      posts,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
    });
  }
};
exports.addPosts = async (req, res, next) => {
  try {
    const { _id: id, posts } = req.body;
    const post_added = await User.findByIdAndUpdate(
      id,
      {
        $push: { dairy: { ...posts } },
      },
      { safe: true, upsert: true }
    );
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
    });
  }
};
exports.editPosts = async (req, res, next) => {
  try {
    const { _id: id, edit_id, posts } = req.body;
    const editedPost = await User.update(
      { 'dairy._id': edit_id },
      {
        $set: {
          'dairy.$.title': posts.title,
          'dairy.$.description': posts.description,
          'dairy.$.time': new Date(),
        },
      }
    );
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
    });
  }
};

exports.deletePosts = async (req, res, next) => {
  try {
    const { _id: id, dairy_id } = req.body;
    const deleted = await User.findByIdAndUpdate(id, {
      $pull: { dairy: { _id: dairy_id } },
    });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
    });
  }
};
