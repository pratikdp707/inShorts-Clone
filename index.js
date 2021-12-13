const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 8000;


app.use('/api/news/', require('./routes/News'));

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
})