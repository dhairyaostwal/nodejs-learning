const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res
        .status(404)
        .json({ message: "Hey", app: "Natours" });
    console.log("Getting from / route")
})

app.post('/', (req, res) => {
    res.send("Posting to the URL /")
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})