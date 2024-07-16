const mongoose = require('mongoose');

const habitatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  animals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],
});

module.exports = mongoose.model('Habitat', habitatSchema);
