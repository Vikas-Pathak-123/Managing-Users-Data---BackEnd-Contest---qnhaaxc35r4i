//Note: You have to edit only this file
const User = require('../models/userModel');

//Registering user into database
const createUser = async (req, res) => {
  try {
    //Write a code here to save a user into db
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json({newUser:newUser})
  } catch (err) {
    console.error('Failed to create user', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

//Get User From a Particular id
const getUser = async (req, res) => {
  try {
    // Write a code here to get user from a specific ID
    const userId =req.params.id;
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({error:"User not found"})
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Failed to get user details', err);
    res.status(500).json({ error: 'Failed to get user details' });
  }
};

//Updating User
const updateUser = async (req, res) => {
  try {
    // Write a code here to update user details
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updateData,{
      new:true,
    })

    if(!updatedUser){
      return res.status(404).json({error:"User not found"});
    }
    res.status(200).json({ message: "User details updated successfully" });
  } catch (err) {
    console.error('Failed to update user details', err);
    res.status(500).json({ error: 'Failed to update user details' });
  }
};

//Deleting User
const deleteUser = async (req, res) => {
  try {
    // Write a code here to DELETE user from a given Id parameter
        const userId = req.params.id;
        const deletedUser  = await User.findByIdAndDelete(userId);
         if (!deletedUser) {
           return res.status(404).json({ error: "User not found" });
         }
         res.status(200).json({message:"User deleted successfully"})


  } catch (err) {
    console.error('Failed to delete user', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};


module.exports = { createUser, getUser, updateUser, deleteUser };
