const express = require("express");
const {
  enableWallet,
  getWalletBalance,
  updateWalletBalance,
} = require("../controllers/walletController.js");
const { enableWalletSchema, getBalanceSchema, updateBalanceSchema } = require("../validators/walletValidator");
const validate = require("../middlewares/validate");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/enable-wallet", authMiddleware, validate(enableWalletSchema), enableWallet);
router.get("/balance", authMiddleware, validate(getBalanceSchema), getWalletBalance);
router.post("/update-balance", validate(updateBalanceSchema), authMiddleware, updateWalletBalance);

module.exports = router;
