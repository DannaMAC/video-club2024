const express = require('express');
const { Genre } = require('../db');

function create(req, res, next) {
    const description=req.body.description;
    const status=req.body.status;
    Genre.create({
        description: description, 
        status: status
    }).then(object => res.json(object))
        .catch(ex => res.send(ex));
}

function list(req, res, next) {
    Genre.findAll()
        .then(objects =>res.json(objects))
        .catch(ex => res.send(ex));
}

function index(req, res, next) {
    const id=req.params.id;
    Genre.findByPk(id)
        .then(object =>res.json(object))
        .catch(ex => res.send(ex));
}

function replace(req, res, next) {
    const id= req.params.id;
    Genre.findByPk(id)
            .then(object =>{
                const description= req.body.description ? req.body.description : ""; 
                const status= req.body.status ? req.body.status : ""; 
                object.update({
                    description: description,
                    status: status
                }).then(objects => res.json(object))
                  .catch(ex => res.send(ex)); 
            }).catch(ex => res.send(ex));
}

function update(req, res, next) {
    const id= req.params.id;
    Genre.findByPk(id)
            .then(object =>{
                const description= req.body.description ? req.body.description : object.description; 
                const status= req.body.status ? req.body.status : object.status; 
                object.update({
                    description: description,
                    status: status
                }).then(objects => res.json(object))
                  .catch(ex => res.send(ex)); 
            }).catch(ex => res.send(ex));
}

function destroy(req, res, next) {
    const id= req.params.id;
    Director.destroy({where: {id : id }})
    .then(object => res.json(object))
    .catch(ex => res.send(ex))
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};
