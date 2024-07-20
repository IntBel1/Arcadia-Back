// models/init.js
const Utilisateur = require('./Utilisateur');
const Role = require('./role');

Utilisateur.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Utilisateur, { foreignKey: 'role_id' });

module.exports = { Utilisateur, Role };
