const express = require('express');
const router = express.Router();
const controller = require('../controllers/genres');

/* POST genres listing. */
router.post('/', controller.create)

/* GET genres listing. */
router.get('/', controller.list)

/* GET genre by id. */
router.get('/:id', controller.index)

/* PUT replace genre by id. */
router.put('/:id', controller.replace)

/* PATCH update genre by id. */
router.patch('/:id', controller.update)

/* DELETE genre by id. */
router.delete('/:id', controller.destroy)

module.exports = router;