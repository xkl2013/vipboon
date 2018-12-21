const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConfig');
//建模
const Demo = sequelize.define('demo', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});
sequelize.models.Demo;
module.exports = Demo;
