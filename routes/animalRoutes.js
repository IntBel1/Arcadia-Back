const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Route to get all animals
router.get('/animals', animalController.getAllAnimals);

// Route to create a new animal
router.post('/animals', animalController.createAnimal);

// Route to get an animal by ID
router.get('/animals/:id', animalController.getAnimalById);

// Route to update an animal
router.put('/animals/:id', animalController.updateAnimal);

// Route to delete an animal
router.delete('/animals/:id', animalController.deleteAnimal);

module.exports = router;
