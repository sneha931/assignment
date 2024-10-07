const express = require('express');
const router = express.Router();
const mongodb=require("mongodb")
const Student = require("../models/Student"); 


router.get('/students', async (req, res) => {
    try {
        const students = await Student.find(); 
        res.status(200).json(students); 
    } catch (err) {
        res.status(500).send("Error fetching students: " + err.message);
    }
});


router.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id); 
        if (!student) return res.status(404).send("Student not found");
        res.status(200).json(student);
    } catch (err) {
        res.status(500).send("Error fetching student: " + err.message);
    }
});


router.post('/students', async (req, res) => {
    const newStudent = new Student({
        name: req.body.name,
        regid: req.body.regid
    });

    try {
        const savedStudent = await newStudent.save(); 
        res.status(201).json(savedStudent); 
    } catch (err) {
        res.status(500).send("Error creating student: " + err.message);
    }
});


router.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name, regid: req.body.regid }, 
            { new: true, runValidators: true } 
        );

        if (!updatedStudent) return res.status(404).send("Student not found");
        res.status(200).json(updatedStudent); 
    } catch (err) {
        res.status(500).send("Error updating student: " + err.message);
    }
});


router.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id); 
        if (!deletedStudent) return res.status(404).send("Student not found");
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});

module.exports = router;
