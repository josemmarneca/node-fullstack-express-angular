const express = require('express'); //import express

// 1.
const router = express.Router();


// 2.
const resourceController = require('./controllers/resourceController');
// define routes to a controller
router.post('/resource', resourceController.newResource);
router.get('/resource', resourceController.getResource)
// 4.
module.exports = router; // export to use in server.js
