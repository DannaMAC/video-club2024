const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

/* POST movies listing. */
router.post('/', controller.create)

/* GET movies listing. */
router.get('/', controller.list)

/* GET movie by id. */
router.get('/:id', controller.index)

/* PUT replace movie by id. */
router.put('/:id', controller.replace)

/* PATCH addActor movie by id. */
router.patch('/actor', controller.addActor)

/* PATCH update movie by id. */
router.patch('/:id', controller.update)

/* DELETE movie by id. */
router.delete('/:id', controller.destroy)

module.exports = router;