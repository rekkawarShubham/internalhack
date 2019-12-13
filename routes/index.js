const express = require("express");

const rootRoutes = require('./root');
const accountRoutes = require('./account.js');

const validate_auth = require('../middleware/validate_auth.js')

const router = express.Router();

// Middleware function
router.use('/account', validate_auth);

router.use("/", rootRoutes)
router.use("/account", accountRoutes);


module.exports = router;