const express = require('express')
const morgan = require('morgan')
const app = express()

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRouter')

// 1. MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());

// middleware will execute only for route below
app.use((req, res, next) => {
    console.log("Hello from middleware 🚀");
    next();
})

// middleware only for getAllTours()
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// 2. ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

module.exports = app;