const Sequelize = require('sequelize')
const connection = new Sequelize('curso','root','root',{
    host:'localhost',
    dialect:'mysql',

})

module.exports = connection;