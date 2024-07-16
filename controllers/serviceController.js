// controllers/serviceController.js
const Service = require('../models/Service');

// Create a new service
exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a service by ID
exports.updateService = async (req, res) => {
  try {
    const [updated] = await Service.update(req.body, {
      where: { service_id: req.params.id },
    });
    if (updated) {
      const updatedService = await Service.findByPk(req.params.id);
      res.status(200).json(updatedService);
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a service by ID
exports.deleteService = async (req, res) => {
  try {
    const deleted = await Service.destroy({
      where: { service_id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: 'Service deleted' });
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
