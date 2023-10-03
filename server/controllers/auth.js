import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register User, using async/await allows time for request to complete and return a response

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const salt = await bcrypt.genSalt(10); // salt is a random string of characters that is added to the password before hashing to make it more secure
        const passwordHash = await bcrypt.hash(password, salt); // hash the password with the salt

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000) + 1,
            impressions: Math.floor(Math.random() * 1000) + 1,
        });  // create a new user with the hashed password

        const savedUser = await newUser.save(); // save the user to the database
        res.status(201).json(savedUser); // return the saved user

    } catch (error) {
        res.status(500).json(error); // return an error if something goes wrong
    }
};

// Login User
export const login = async (req, res) => {
    try {
        const { email, password } = req.body; // get the email and password from the request body
        const user = await User.findOne({ email }); // find the user with the email
        if (!user) return res.status(400).json({msg: "User does not exist"}); // if the user does not exist, return an error

        const isMatch = await bcrypt.compare(password, user.password); // compare the password from the request to the user's password
        if (!isMatch) return res.status(400).json({msg: "Incorrect password"}); // if the passwords do not match, return an error

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // create a token with the user's id
        delete user.password; // delete the user's password from the response
        res.status(200).json({token,user}); // return the token and user

    } catch (error) {
        res.status(500).json(error); // return an error if something goes wrong
    }
};