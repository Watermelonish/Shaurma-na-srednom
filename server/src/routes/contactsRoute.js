const {sendEmail} = require("../controllers/contactsController")
const router = require('express').Router();

router.post("/sendemail", sendEmail);

module.exports =router;