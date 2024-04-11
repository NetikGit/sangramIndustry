const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/vendor')

router.post('/addVendor', VendorControllers.addVendor)

router.get(`/getVendor`, VendorControllers.getVendorDetails)

module.exports = router;