const Sequelize = require('sequelize');
const directorModel=require('../models/director');
const genreModel=require('../models/genre');
const movieModel=require('../models/movie');
const actorModel=require('../models/actor');
const movieActorModel=require('../models/movieActor');

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
const Movie= movieModel(sequelize,Sequelize);
const Actor= actorModel(sequelize,Sequelize);
const movieActor= movieActorModel(sequelize,Sequelize);

//Un genero puede tener muchas peliculas 
Genre.hasMany(Movie,{as:'movies'});
//Una pelicula tiene un genero
Movie.belongsTo(Genre,{as: 'genre'});

//Un director participa en muchas peliculas 
Director.hasMany(Movie,{as:'movies'});
//Una pelicula tiene un director
Movie.belongsTo(Director,{as:'director'})

//Un actor participa en muchas peliculas
movieActor.belongsTo(Movie, {foreignKey: 'movieId'});
//En una pelicula participan muchos actores
movieActor.belongsTo(Actor, {foreignKey: 'actorId'});

//movieActor => Movie
Movie.belongsToMany(Actor,{
    foreignKey: 'actorId',
    as: 'actors',
    through: 'movies_actors'
});

//movieActor => Actor
Actor.belongsToMany(Movie,{
    foreignKey: 'movieId',
    as: 'movies',
    through: 'movies_actors'
});

sequelize.sync({
    force: true
}).then(()=>{
    console.log("Base de datos sincronizada correctamente");
});

module.exports={Director, Genre, Movie, Actor};