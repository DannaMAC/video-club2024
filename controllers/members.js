const express = require('express');
const { Member } = require('../db');

function create(req, res, next) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const address = req.body.address;
    const phone = req.body.phone;
    
    Member.create({
        first_name: firstName,
        last_name: lastName,
        address: address,
        phone: phone
    })
    .then(object => res.json(object))
    .catch(ex => res.send(ex));
}

function list(req, res, next) {
    Member.findAll()
        .then(objects => res.json(objects))
        .catch(ex => res.send(ex));
}

function index(req, res, next) {
    const id = req.params.id;
    Member.findByPk(id)
        .then(object => res.json(object))
        .catch(ex => res.send(ex));
}

function replace(req, res, next) {
    const id = req.params.id;
    Member.findByPk(id)
        .then(object => {
            const firstName = req.body.first_name ? req.body.first_name : "";
            const lastName = req.body.last_name ? req.body.last_name : "";
            const address = req.body.address ? req.body.address : "";
            const phone = req.body.phone ? req.body.phone : "";
            object.update({
                first_name: firstName,
                last_name: lastName,
                address: address,
                phone: phone
            })
            .then(object => res.json(object))
            .catch(ex => res.send(ex));
        })
        .catch(ex => res.send(ex));
}

function update(req, res, next) {
    const id = req.params.id;
    Member.findByPk(id)
        .then(object => {
            const firstName = req.body.first_name ? req.body.first_name : object.first_name;
            const lastName = req.body.last_name ? req.body.last_name : object.last_name;
            const address = req.body.address ? req.body.address : object.address;
            const phone = req.body.phone ? req.body.phone : object.phone;
            object.update({
                first_name: firstName,
                last_name: lastName,
                address: address,
                phone: phone
            })
            .then(object => res.json(object))
            .catch(ex => res.send(ex));
        })
        .catch(ex => res.send(ex));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Member.destroy({ where: { id: id } })
        .then(object => res.json(object))
        .catch(ex => res.send(ex));
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};
