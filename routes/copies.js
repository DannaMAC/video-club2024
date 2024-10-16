const express = require('express');
const router = express.Router();
const controller = require('../controllers/copies');

/* POST actors listing. */
router.post('/', controller.create)

/* GET actors listing. */
router.get('/', controller.list)

/* GET actor by id. */
router.get('/:id', controller.index)

/* PUT replace actor by id. */
router.put('/:id', controller.replace)

/* PATCH update actor by id. */
router.patch('/:id', controller.update)

/* DELETE actor by id. */
router.delete('/:id', controller.destroy)

module.exports = router;