import User from "../models/user.model.js";
import { getAuth } from 'firebase-admin/auth';
import { verifyFirebaseToken } from '../Firebase/firebase.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import { validationResult } from 'express-validator';

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, country, phone, gender, dateOfBirth } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        country,
        phone,
        gender,
        dateOfBirth,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Google Auth
  export const googleSignIn = async (req, res) => {
    // const { token } = req.body;
  
    // try {
    //   // Verify the token with Firebase Admin SDK
    //   const decodedToken = await admin.auth().verifyIdToken(token);
    //   const { email, name } = decodedToken;
  
    //   let user = await User.findOne({ email });
    //   if (!user) {
    //     user = new User({
    //       firstName: name.split(' ')[0],
    //       lastName: name.split(' ')[1],
    //       email,
    //       googleId: decodedToken.uid,
    //     });
    //     await user.save();
    //   }
  
    //   const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //   res.status(200).json({ message: 'Google sign-in successful', token: accessToken });
    // } 
    try {
        const {  email } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (!user) {

            user = new User({  email });
            await user.save();
            return res.status(201).json({ message: 'User created', user });
        }

        // User already exists
        res.status(200).json({ message: 'User already exists', user });
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ message: 'Login successful', token, user: { email: user.email } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };

export {registerUser,loginUser};
