const express = require("express");
const { signup, signin } = require("../controllers/userController");
const { signupSchema, signinSchema } = require("../validators/userValidator");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(signinSchema), signin);

module.exports = router;
