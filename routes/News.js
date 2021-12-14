const newsSchema = require('../models/News')
const express = require('express');
const router = express.Router();


router.get("/getNews/:category/", async(req, res) => {
    category = req.params.category;
    try {
        let data = await newsSchema.find({type: category})
        res.json({success:true, data});
    } catch (error) {
      res.json({success:false, error})
    }
});

module.exports = router;