const fs = require('fs')

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
)

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        result: users.length,
        data: {
            user: users
        }
    })
}

exports.postUser = ((req, res) => {
    res.statexports.us(500).json({
        status: 'error',
        message: 'This route is not yet completed'
    })
})

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet completed'
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet completed'
    })
}

exports.deleteUser = (req, res) => {
    if (req.params.id * 1 > users.length) {
        return res.status(404).json({
            status: 'failure',
            message: 'Invalid ID'
        });
    }
    res.status(204)
        .json({
            status: 'success',
            data: null
        })
}