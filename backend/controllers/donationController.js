const axios = require('axios');
const User = require('../models/User');

exports.donate = async (req, res) => {
  const { amount, recipientEmail } = req.body;
  const sender = req.user.id;
  try {
    const recipient = await User.findOne({ email: recipientEmail });
    if (!recipient) return res.status(400).json({ msg: 'Recipient not found' });

    // Assuming Theta transaction logic is implemented
    const response = await axios.post('https://theta-transaction-api', {
      sender: process.env.THETA_WALLET_ADDRESS,
      recipient: recipient.thetaWallet,
      amount,
    });

    if (response.status === 200) {
      recipient.donations.push({ amount, donor: sender, date: new Date() });
      await recipient.save();
      res.json({ msg: 'Donation successful' });
    } else {
      res.status(500).json({ msg: 'Donation failed' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
