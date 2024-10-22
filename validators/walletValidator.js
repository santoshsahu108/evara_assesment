const Joi = require("joi");

const enableWalletSchema = Joi.object({});

const getBalanceSchema = Joi.object({});

const updateBalanceSchema = Joi.object({
  amount: Joi.number().positive().required(),
  type: Joi.string().valid("credit", "debit").required(),
});

module.exports = {
  enableWalletSchema,
  getBalanceSchema,
  updateBalanceSchema,
};
