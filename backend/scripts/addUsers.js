const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const generateQRCode = require('../utils/generateQRCode');
dotenv.config({ path: '../.env' }); // Load environment variables from .env file

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line

// MongoDB connection string
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined. Please check your .env file.');
}

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  idPhoto: { type: String, required: true },
  thetaWallet: { type: String, required: true },
  qrCode: { type: String },
  donations: [{ amount: Number, donor: String, date: Date }],
});

const User = mongoose.model('User', UserSchema);

// Function to add a user
const addUser = async ({ name, email, password, gender, idPhoto, thetaWallet, qrCode }) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    gender,
    idPhoto,
    thetaWallet,
    qrCode,
  });

  try {
    await user.save();
    console.log(`User ${name} added successfully`);
  } catch (err) {
    console.error(`Error adding user ${name}:`, err.message);
  }
};

// Add users
const addUsers = async () => {
  try {
    await mongoose.connection.dropCollection('users');
  } catch (error) {
    console.log('Collection users does not exist, skipping drop.');
  }

  const femaleQRCode = await generateQRCode('female@example.com');
  const maleQRCode = await generateQRCode('male@example.com');

  await addUser({
    name: 'Female User',
    email: 'female@example.com',
    password: 'examplePassword123', // This will be hashed
    gender: 'female',
    idPhoto: 'female_id_photo_url',
    thetaWallet: '0x137F8A5a27EdE35eC03063Ed24cC7B0c1BFD0B0e',
    qrCode: femaleQRCode,
  });

  await addUser({
    name: 'Male User',
    email: 'male@example.com',
    password: 'examplePassword123', // This will be hashed
    gender: 'male',
    idPhoto: 'male_id_photo_url',
    thetaWallet: '0x137F8A5a27EdE35eC03063Ed24cC7B0c1BFD0B0e',
    qrCode: maleQRCode,
  });

  mongoose.connection.close();
};

addUsers();
