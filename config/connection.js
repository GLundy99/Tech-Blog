const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequalize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequalize = new Sequalize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: '3306'
        }
    );
}

module.exports = sequalize;