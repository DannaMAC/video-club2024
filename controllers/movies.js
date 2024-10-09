const express = require('express');
const { Movie, Actor }= require('../db');

function create(req, res, next){
    const title=req.body.title;
    const genreId=req.body.genreId;
    const directorId=req.body.directorId;
    Movie.create({
        title: title,
        genreId: genreId,
        directorId: directorId
    }).then(object => res.json(object))
    .catch(ex => res.send(ex));
}

function list(req, res, next){
    Movie.findAll({ include:['genre', 'director']})
        .then(objects =>res.json(objects))
        .catch(ex => res.send(ex));
}

function addActor(req, res, next){
    const idMovie=req.body.idMovie;
    const idActor=req.body.idActor;

    Movie.findByPk(idMovie).then(movie => {
        Actor.findByPk(idActor).then(actor => {
            movie.addActor(actor);
            res.json(movie);
        }).catch(ex => res.send(ex));
    }).catch(ex => res.send(ex));
}

function index(req, res, next){
    res.send(`GET => /users/${req.body.id}`)
}

function replace(req, res, next){
    res.send('PUT => /users/:id')
}

function update(req, res, next){
    res.send('PATCH => /users/:id')
}

function destroy(req, res, next){
    res.send('DELETE => /users/:id')
}

module.exports = {create, list, index, replace, update, destroy, addActor};