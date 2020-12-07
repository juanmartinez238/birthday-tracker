
const router = require('express').Router();

const {getAllBirthdays, createBirthday} = require('../controllers/birthdays');

router.get('/', getAllBirthdays);

router.post('/', createBirthday)

module.exports = router;