const express = require('express')
const router = express.Router()

const ctspController = require('../controller/ctspController')

router.get('/Create', ctspController.create)
router.get('/store/aproduct', ctspController.storeAproduct)
router.post('/admin', ctspController.adminkt, ctspController.adminnext)
router.get('/trash/aproduct', ctspController.trashAproduct)
router.post('/store', ctspController.store)
router.get('/:id/edit', ctspController.edit)

router.put('/:id', ctspController.update)
router.patch('/:id/restore', ctspController.restore)
router.delete('/:id', ctspController.destroy)
router.delete('/:id/force', ctspController.forceDestroy)
router.get('/:TenSP', ctspController.show)


module.exports = router