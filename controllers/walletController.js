const Wallet = require("../models/walletModel");
const User = require("../models/userModel");

// Enable and activate wallet
exports.enableWallet = async (req, res) => {
  try {
    console.log(req.user)
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    let wallet = await Wallet.findOne({ user: user._id });
    if (!wallet) {
      wallet = await Wallet.create({ user: user._id, isActive: true });
      user.wallet = wallet._id;
      await user.save();
    }

    wallet.isActive = true;
    await wallet.save();

    res.json({ message: "Wallet activated", wallet });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read wallet balance
exports.getWalletBalance = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate("wallet");
    if (!user || !user.wallet || !user.wallet.isActive)
      return res.status(404).json({ message: "No active wallet found" });

    res.json({ balance: user.wallet.balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update wallet balance (credit/debit)
exports.updateWalletBalance = async (req, res) => {
  const { amount, type } = req.body; // 'credit' or 'debit'
  try {
    const user = await User.findById(req.user.userId).populate("wallet");
    console.log("------------->user details along the wallet")
    console.log(user)
    if (!user || !user.wallet || !user.wallet.isActive)
      return res.status(404).json({ message: "No active wallet found" });

    if (type === "debit" && user.wallet.balance < amount)
      return res.status(400).json({ message: "Insufficient funds" });

    user.wallet.balance += type === "credit" ? amount : -amount;
    await user.wallet.save();

    res.json({ message: `Wallet ${type}ed successfully`, balance: user.wallet.balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
