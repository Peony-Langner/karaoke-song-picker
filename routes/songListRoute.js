const express = require('express');
const controller = require('../controller/songListController');

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome!'));

//* dummy lists:
router.get('/listrocksongs', controller.listRockSongs);
router.post('/addrocksong', controller.addRockSong);

//* personalized list
router.get('/list', controller.listSongs);
router.post('/add', controller.addSong);

module.exports = router;
