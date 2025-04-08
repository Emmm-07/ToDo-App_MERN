const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


app.get('/',(req, res) => {
    res.send("Hello from server!");
})

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`))