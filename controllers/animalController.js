const Animal = require('../models/Animal');

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.findAll();
        res.json(animals);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.createAnimal = async (req, res) => {
    try {
        const animal = await Animal.create(req.body);
        res.json(animal);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.getAnimalById = async (req, res) => {
    try {
        const animal = await Animal.findByPk(req.params.id);
        if (animal) {
            res.json(animal);
        } else {
            res.status(404).json({ error: 'Animal not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.updateAnimal = async (req, res) => {
    try {
        const [updated] = await Animal.update(req.body, {
            where: { animal_id: req.params.id }
        });
        if (updated) {
            const updatedAnimal = await Animal.findByPk(req.params.id);
            res.json(updatedAnimal);
        } else {
            res.status(404).json({ error: 'Animal not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        const deleted = await Animal.destroy({
            where: { animal_id: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Animal deleted' });
        } else {
            res.status(404).json({ error: 'Animal not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};
