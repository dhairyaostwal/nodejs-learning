const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const reviews = JSON.parse(
    fs.readFileSync('./dev-data/data/reviews.json')
);

const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours: tours
        }
    })
}

const getTour = (req, res) => {
    const id = req.params.id;
    const tour = tours.find(el => el.id == id);

    if (!tour) {
        return res.status(404).json({
            status: 'failure',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tours: tour
        }
    })
}

const postTour = (req, res) => {
    const newID = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newID }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    })
}

const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'failure',
            message: 'Invalid ID'
        });
    }
    res.status(200)
        .json({
            status: 'success',
            data: {
                tour: '<Updated tour here...>'
            }
        })
}

const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'failure',
            message: 'Invalid ID'
        });
    }
    res.status(204).json({
        status: 'success',
        data: null
    })
}

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', postTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours')
    .get(getAllTours)
    .post(postTour)

app.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

app.get('/api/v1/reviews', (req, res) => {
    res.status(200).json({
        status: 'success',
        result: reviews.length,
        data: {
            reviews: reviews
        }
    })
})

app.post('/api/v1/reviews', (req, res) => {
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
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})