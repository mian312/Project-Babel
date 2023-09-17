import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from "../models/user.model.js";
import Token from '../models/token.js';

dotenv.config();

// Get user details
export const getUser = async (req, res) => {
    try {
        // Extract email and password from the req body
        const { email, password } = req.body;

        // Find the user by email in the database
        const user = await User.findOne({ email });

        if (!user) {
            // If no user is found, return a 404 Not Found res
            return res.status(404).json({ msg: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // If the password is not valid, return a 401 Unauthorized res
            return res.status(401).json({ msg: 'Invalid email or password' });
        }

        // If both the email and password are valid, return the user data
        return res.status(200).json({ user });
    } catch (error) {
        // Handle any errors that occur during the process
        return res.status(500).json({ msg: 'Error while fetching user', error: error.message });
    }
}

// Create user account
export const singupUser = async (req, res) => {
    try {
        // Generate a salt with a cost factor of 10 for password hashing
        const salt = await bcrypt.genSalt(10);
    
        // Hash the user's password using the generated salt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        // Create an object reference for the user with hashed password
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
    
        // Create a new User instance with the user object and save it to the database
        const newUser = new User(user);
        await newUser.save();
    
        // Return a success responce when the signup is completed
        return res.status(200).json({ msg: 'Signup successful' });
    } catch (error) {
        // Handle any errors that occur during signup
        return res.status(500).json({ msg: 'Error while signing up user', error: error.message });
    }
}

// Access user account
export const loginUser = async (req, res) => {
    // Find a user with the provided email
    let user = await User.findOne({ email: req.body.email });

    // If user does not exist, return a 400 status and a message
    if (!user) {
        return res.status(400).json({ msg: 'User email does not exist' });
    }

    try {
        // Compare the provided password with the hashed password stored in the database
        let match = await bcrypt.compare(req.body.password, user.password);

        if (match) {
            // If the password matches, create an access token and a refresh token
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
            // Store the refresh token in the database
            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            // Return the user data, access token, and refresh token in the response
            return res.status(200).json({ user, accessToken: accessToken, refreshToken: refreshToken });
        } else {
            // If the password does not match, return a 400 status and a message
            res.status(400).json({ msg: 'Password does not match' });
        }
    } catch (error) {
        // If there's an error during login, return a 500 status and an error message
        res.status(500).json({ msg: 'Error while logging in the user', err: error });
    }
}


// Logout User
export const logoutUser = async (req, res) => {
    try {
        // Extract the token from the request body
        const token = req.body.refreshToken;

        // Check if the token exists in the database
        const tokenExists = await Token.findOne({ token: token });

        if (tokenExists) {
            // If the token exists, delete it from the database
            await Token.deleteOne({ token: token });

            // Respond with a 204 status (No Content) and a success message
            return res.status(204).json({ msg: 'Logout successful' });
        } else {
            // If the token does not exist, respond with a 400 status and an error message
            return res.status(400).json({ msg: 'Token not found or already expired' });
        }
    } catch (error) {
        // Handle any errors that occur during logout
        return res.status(500).json({ msg: 'Error while logging out the user', err: error.message });
    }
}

