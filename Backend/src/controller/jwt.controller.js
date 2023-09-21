import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../models/token.js';

dotenv.config();

// Middleware to authenticate the access token
export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) {
        // If no token is present, return a 401 Unauthorized response
        return response.status(401).json({ msg: 'Token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            // If the token is invalid, return a 403 Forbidden response
            return response.status(403).json({ msg: 'Invalid token' })
        }

        // If the token is valid, attach the user to the request object
        request.user = user;
        next();
    })
}

// Endpoint to create a new access token using a refresh token
export const createNewToken = async (request, response) => {
    const refreshToken = request.body.token.split(' ')[1];

    if (!refreshToken) {
        // If no refresh token is provided, return a 401 Unauthorized response
        return response.status(401).json({ msg: 'Refresh token is missing' })
    }

    const token = await Token.findOne({ token: refreshToken });

    if (!token) {
        // If the provided refresh token is not found, return a 404 Not Found response
        return response.status(404).json({ msg: 'Refresh token is not valid'});
    }

    jwt.verify(token.token, process.env.REFRESH_SECRET_KEY, (error, user) => {
        if (error) {
            // If the refresh token is invalid, return a 500 Internal Server Error response
            response.status(500).json({ msg: 'Invalid refresh token'});
        }
        // If the refresh token is valid, create a new access token and send it in the response
        const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});

        return response.status(200).json({ accessToken: accessToken })
    })
}
