const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
const authenticateJWT = require('../middleware/auth');
// Route to get all animals
router.get('/animals', animalController.getAllAnimals);

// Route to create a new animal
router.post('/animals', authenticateJWT,animalController.createAnimal);

// Route to get an animal by ID
router.get('/animals/:id', animalController.getAnimalById);

// Route to update an animal
router.put('/animals/:id', authenticateJWT,animalController.updateAnimal);

// Route to delete an animal
router.delete('/animals/:id', authenticateJWT,animalController.deleteAnimal);

module.exports = router;
