const express = require('express');
const router = express.Router();
const controller = require('../controllers/directors');

/* POST directors listing. */
router.post('/', controller.create)

/* GET directors listing. */
router.get('/', controller.list)

/* GET director by id. */
router.get('/:id', controller.index)

/* PUT replace director by id. */
router.put('/:id', controller.replace)

/* PATCH update director by id. */
router.patch('/:id', controller.update)

/* DELETE director by id. */
router.delete('/:id', controller.destroy)

module.exports = router;
