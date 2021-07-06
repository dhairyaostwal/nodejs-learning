const express = require('express')
const fs = require('fs')

const reviews = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/reviews.json`)
);

const router = express.Router();

const getReviews = (req, res) => {
    res.status(200).json({
        status: 'success',
        result: reviews.length,
        data: {
            reviews: reviews
        }
    })
}

const postReviews = (req, res) => {
    const newID = reviews[reviews.length - 1].id + 1;
    const newReview = Object.assign({ id: newID }, req.body);
    reviews.push(newReview);
    fs.writeFile('./dev-data/data/reviews.json', JSON.stringify(reviews), err => {
        res.status(201).json({
            status: 'success',
            data: {
                review: newReview
            }
        });
    })
}

router.route('/')
    .get(getReviews)
    .post(postReviews)

module.exports = router