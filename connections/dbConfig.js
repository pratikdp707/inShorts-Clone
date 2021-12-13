const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://root:root@cluster0.o1ehh.mongodb.net/inShortsDB?retryWrites=true&w=majority';

const connectToMongo = () => {
    try { 
        mongoose.connect(mongoURI, () => {
            console.log("Connected to mongo successfully!!!");
        })
    } catch (error) {
        console.log("Error while connecting with DB ", error);
    }
}


module.exports = connectToMongo;