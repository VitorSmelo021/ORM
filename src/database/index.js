const Sequelize = require("sequelize"); // Importando o ORM sequelize

const dbConfig = require("../config/database"); // Importando o arquivo de configuração do banco de dados

const connection = new Sequelize(dbConfig); // criando a conexão com o banco de dados

module.exports = connection; // Exportando a conexão com o banco de dados

