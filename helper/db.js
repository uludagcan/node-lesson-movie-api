const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://can:1a2b3c4d@my-mongodb-movie-api-gjbdf.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
    //mongoose.connect('mongodb://movie-user:1234abc@ds211558.mlab.com:11558/heroku_60f3kfzd',{ useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
};