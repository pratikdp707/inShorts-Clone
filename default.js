const data = require('./constants/data');
const news = require('./models/News');

const DefaultData = async() => {
    try {
        await news.insertMany(data);
        console.log("data imported successfully");
    } catch (error) {
        console.log("error ", error.message);
    }
}

module.exports = DefaultData;