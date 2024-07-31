const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', UserSchema);
