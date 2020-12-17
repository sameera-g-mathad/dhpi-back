const express = require('express');
const UserController = require('./../Controllers/UserController');
const router = express.Router();

router.route('/').post(UserController.addUser);
router
  .route('/view_dairy')
  .get(UserController.getPosts)
  .patch(UserController.deletePosts);
router.route('/add_note').post(UserController.addPosts);
router.route('/edit_note').patch(UserController.editPosts);
module.exports = router;
