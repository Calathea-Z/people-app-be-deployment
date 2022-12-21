const express = require('express');
const router = express.Router();
router.use(express.json());

const { People } = require('../models');

//http://localhost:4000/people/
//index
router.get('/', async (req, res, next) => {
    // res.status(200).json({message: "People index route"});
    try {
        const allPeople = await People.find({})
        res.status(201).json(allPeople)
    }catch(error){
        res.status(400).json({error: error})
    }
})

//http://localhost:4000/people/
//Post
router.post('/', async (req, res, next) => {
    try {
        const newPerson = await People.create(req.body)
        res.status(201).json(newPerson)
    }catch(error){
        res.status(400).json({error: error})
    }
});

//http://localhost:4000/people/id
//Show
router.get('/:id', async (req, res, next ) => {
    try {
        const findPerson = await People.findById(req.params.id);
        res.status(200).json(findPerson);
    } catch (error) {
        res.status(404).json({error: error})
    }
});

//http://localhost:4000/people/id
//Delete
router.delete('/:id', async (req, res, next ) => {
    try {
        const deletePerson = await People.findByIdAndDelete(req.params.id);
        res.status(200).json(deletePerson);
    } catch(error) {
        res.status(404).json({error: error})
    } 
});

//http://localhost:4000/people/id
//Update
router.put('/:id', async (req, res, next) => {
    try {
        const updatePerson = await People.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updatePerson);
    } catch(error) {
        res.status(404).json({error: error})
    }
});

module.exports = router;