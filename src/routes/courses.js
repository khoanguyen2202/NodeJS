const express = require('express');
const router = express.Router();
const courseController = require('../app/controller/CourseController');
express.urlencoded({
    extended: true,
});
express.json();

router.get('/:slug', courseController.show);

module.exports = router;
