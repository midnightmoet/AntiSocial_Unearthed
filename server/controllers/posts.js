import Post from "../models/Post.js";
import User from "../models/User.js";

// -----------------CRUD-----------------------------------
// Create
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body; // req.body is the object sent by the client
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    }); // create a new post
    await newPost.save(); // save the post

    const post = await Post.find(); // find all posts
    res.status(201).json(post); // 201: created
  } catch (err) {
    res.status(409).json({ message: err.message }); // 409: conflict
  }
};

// ----------------------------------------------------------------

// Read
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post); // 200: ok
  } catch (err) {
    res.status(404).json({ message: err.message }); // 404: not found
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params; // req.params is the object sent by the client
    const post = await Post.find({ userId }); // find all posts
    res.status(200).json(post); // 200: ok
  } catch (err) {
    res.status(404).json({ message: err.message }); // 404: not found
  }
};

// ----------------------------------------------------------------

// Update
export const likePost = async (req, res) => {
    try {
        const {id} = req.params; // req.params is the object sent by the client
        const {userId} = req.body; // req.body is the object sent by the client
        const post = await Post.findById(id); // find the post
        const isLiked = post.likes.get(userId); // check if the user has already liked the post

        if (isLiked) {
           post.likes.delete(userId); // if the user has already liked the post, delete the like 
        } else {
            post.likes.set(userId, true); // if the user has not liked the post, add the like
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        ) // update the post

        res.status(200).json(updatedPost); // 200: ok
    } catch (error) {
        res.status(404).json({ message: err.message }); // 404: not found
    }
};

// ----------------------------------------------------------------

// Delete
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.status(200).json({ message: "Post deleted successfully" }); // 200: ok
  } catch (err) {
    res.status(404).json({ message: err.message }); // 404: not found
  }
};

// ----------------------------------------------------------------

// Like
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    if (!post.likes[userId]) {
      post.likes[userId] = true;
    } else {
      post.likes[userId] = false;
    }
    await post.save();
    res.status(200).json(post); // 200: ok
  } catch (err) {
    res.status(404).json({ message: err.message }); // 404: not found
  }
};

// ----------------------------------------------------------------

// Comment
export const commentPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;
    const post = await Post.findById(id);
    const user = await User.findById(userId);
    const newComment = {
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      comment,
      userPicturePath: user.picturePath,
    };
    post.comments.push(newComment);
    await post.save();
    res.status(200).json(post); // 200: ok
  } catch (err) {
    res.status(404).json({ message: err.message }); // 404: not found
  }
};

// ----------------------------------------------------------------

// Get posts by user
export const getPostsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ userId: id });
    res.status(200).json(posts); // 200: ok
  } catch (err) {
    res.status(404).json({ message: err.message }); // 404: not found
  }
};
