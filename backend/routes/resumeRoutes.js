const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.get('/templates', resumeController.getTemplates);
router.post('/resume', resumeController.createResume);
router.put('/resume/:id', resumeController.updateResume);
router.get('/resume/:id', resumeController.getResume);
router.delete('/resume/:id', resumeController.deleteResume);

module.exports = router;