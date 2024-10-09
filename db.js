const Sequelize = require('sequelize');
const directorModel=require('../models/director');
const genreModel=require('../models/genre');

/*
    1) Nombre de la base de datos
    2) Usuario 
    3) Password
    4) Objeto de configuración <<ORM>>
*/

const sequelize = new Sequelize('video-club', 'root', 'abcd1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const Director= directorModel(sequelize,Sequelize);
const Genre= genreModel(sequelize,Sequelize);

sequelize.sync({
    force: true
}).then(()=>{
    console.log("Base de datos sincronizada correctamente");
});

module.exports={Director};
module.exports={Genre};