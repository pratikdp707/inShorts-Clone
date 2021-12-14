const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    source :{
        type:Object,
        properties:{
            id:{
                type:Number
            },
            name:{
                type:String
            }
        }
    },
    type:{
        type:String
    },
    author:{
        type:String,
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    url:{
        type:String
    },
    urlToImage:{
        type:String,
    },
    publishedAt:{
        type:String
    },
    content:{
        type:String
    } 
})

const news = mongoose.model('news', newsSchema);
module.exports = news;