const Sequelize = require ('sequelize');

const sequelize = new Sequelize("nodemysql", "root", "12345", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(){
    console.log("Sem conexão com o banco de dados!")
});

module.exports = sequelize;