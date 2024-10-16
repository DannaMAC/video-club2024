const Sequelize = require('sequelize');
const directorModel = require('../models/director');
const genreModel = require('../models/genre');
const movieModel = require('../models/movie');
const actorModel = require('../models/actor');
const movieActorModel = require('../models/movieActor');
const copieModel = require('../models/copie');
const memberModel = require('../models/member');
const bookingModel = require('../models/booking');
/*
    1) Nombre de la base de datos: 'video-club'
    2) Usuario: 'root'
    3) Password: 'abcd1234'
    4) Objeto de configuración ORM: Sequelize con MySQL
*/

const sequelize = new Sequelize('video-club', 'root', 'abcd1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

// Definición de los modelos
const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const Actor = actorModel(sequelize, Sequelize);
const movieActor = movieActorModel(sequelize, Sequelize);
const Copie = copieModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const Booking = bookingModel(sequelize, Sequelize);

// Relaciones entre modelos

// Un género puede tener muchas películas
Genre.hasMany(Movie, { as: 'movies' });
// Una película pertenece a un género
Movie.belongsTo(Genre, { as: 'genre' });

// Un director participa en muchas películas
Director.hasMany(Movie, { as: 'movies' });
// Una película tiene un director
Movie.belongsTo(Director, { as: 'director' });

// Relaciones entre películas y actores (muchos a muchos)
movieActor.belongsTo(Movie, { foreignKey: 'movieId' });
movieActor.belongsTo(Actor, { foreignKey: 'actorId' });

Movie.belongsToMany(Actor, {
    foreignKey: 'actorId',
    as: 'actors',
    through: 'movies_actors'
});

Actor.belongsToMany(Movie, {
    foreignKey: 'movieId',
    as: 'movies',
    through: 'movies_actors'
});

// Relaciones para las copias de películas
// Una película tiene muchas copias
Movie.hasMany(Copie, { as: 'copies' });
// Una copia pertenece a una película
Copie.belongsTo(Movie, { as: 'movie' });

// Relaciones para los miembros
// Un miembro puede tener muchas reservas (bookings)
Member.hasMany(Booking, { as: 'bookings', foreignKey: 'memberId' });
// Una reserva pertenece a un miembro
Booking.belongsTo(Member, { as: 'member', foreignKey: 'memberId' });

// Relaciones para las copias y las reservas
// Una copia puede estar asociada a muchas reservas
Copie.hasMany(Booking, { as: 'bookings', foreignKey: 'copieId' });
// Una reserva pertenece a una copia
Booking.belongsTo(Copie, { as: 'copie', foreignKey: 'copieId' });

sequelize.sync({
    force: true
}).then(()=>{
    console.log("Base de datos sincronizada correctamente");
});

module.exports = { Director, Genre, Movie, Actor, Copie, Member, Booking };