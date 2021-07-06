const express = require('express');
const fs = require('fs')
const router = express.Router();

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
)

const getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        result: users.length,
        data: {
            user: users
        }
    })
}

const postUser = ((req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet completed'
    })
})

router.route('/')
    .get(getAllUsers)
    .post(postUser)

module.exports = router;