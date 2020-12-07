const {Birthday} = require('../models/birthday.model');

const getAllBirthdays = (req, res) => {
    // res.send('NOT IMPLEMENTED: GET /')
    Birthday.find()
}

const createBirthday = async (req, res) => {
    // res.send('NOT IMPLEMENTED: POST /')
    try {
        const birthday = new Birthday(req.body);
        await birthday.save();
        res.status(201).json(birthday);
    } catch (err) {
        console.log(err)
    }
}
module.exports = {getAllBirthdays, createBirthday};