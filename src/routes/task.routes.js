const Task = require('../models/task');

const express = require('express');
const router = express.Router();

// GET all Tasks
router.get('/', async (req, res) => {

    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks); 

});

// GET all Tasks
router.get('/:id', async (req, res) => {

    const id = req.params.id;
    const task = await Task.findById(id);
    res.json(task); 

});

// ADD a new task
router.post('/', async (req, res) => {

    const { title, description } = req.body;
    const task = new Task({title, description});
    await task.save();
    console.log(task);
    res.json({status: 'Task Saved'});

});

// UPDATE a new task
router.put('/:id', async (req, res) => {

    const { title, description } = req.body;
    const newTask = {title, description};
    const id = req.params.id;
    await Task.findByIdAndUpdate(id, newTask);
    res.json({status: 'Task Updated'});

});

router.delete('/:id', async (req, res) => {

    const id = req.params.id;
    await Task.findByIdAndRemove(id);
    res.json({status: 'Task Deleted'});

});

module.exports = router;