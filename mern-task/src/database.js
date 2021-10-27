const mongoose = require('mongoose');

const host = 'localhost';
const dbName = 'mern-task';
const URI = `mongodb://${host}/${dbName}`;

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;