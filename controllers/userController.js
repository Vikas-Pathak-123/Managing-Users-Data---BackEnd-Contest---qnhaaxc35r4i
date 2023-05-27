//Note: You have to edit only this file
const User = require('../models/userModel');

//Registering user into database
const createUser = async (req, res) => {
  try {
    //Write a code here to save a user into db
  } catch (err) {
    console.error('Failed to create user', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

//Get User From a Particular id
const getUser = async (req, res) => {
  try {
    // Write a code here to get user from a specific ID
  } catch (err) {
    console.error('Failed to get user details', err);
    res.status(500).json({ error: 'Failed to get user details' });
  }
};

//Updating User
const updateUser = async (req, res) => {
  try {
    // Write a code here to update user details
  } catch (err) {
    console.error('Failed to update user details', err);
    res.status(500).json({ error: 'Failed to update user details' });
  }
};

//Deleting User
const deleteUser = async (req, res) => {
  try {
    // Write a code here to DELETE user from a given Id parameter
  } catch (err) {
    console.error('Failed to delete user', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
module.exports = { createUser, getUser, updateUser, deleteUser };
