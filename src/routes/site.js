const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');
express.urlencoded({
        extended: true,
});
express.json();
router.post('/search', function (req, res) {
    console.log('post');
    console.log('Request: ', req.body);
    res.send('');
});
router.get('/search', function (req, res) {
    console.log('get');
    console.log('Request: ', req.query.q);

    res.render('search');
});
router.use('/search', siteController.search);
router.use('/', siteController.home);
module.exports = router;
