const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/courseRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Course:rg4JO1TPJnAgyqZE@coursecontroller-peqkf.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(courseRouter);

app.listen(3000, () => { console.log('Server is running...') });