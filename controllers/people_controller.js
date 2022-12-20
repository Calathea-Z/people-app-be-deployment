const express = require('express');
const router = express.Router();


//http://localhost:4000/people/
router.get('/', (req,res) => {
    res.status(200).json({message: "People index route"});
})

router.post('/', (req,res) => {
    res.status(201).json({message: "People creat/post route"})
});

module.exports = router;