`use strict`

import express from 'express'
let router = express.Router()
import managerController from '../controller/manager'
import upload from '../../../utils/upload'

router.post('/addProject', upload.single('file'), managerController.addProject)
router.post('/viewProject', managerController.viewProject)
router.get('/allProjects/:managerId', managerController.allProjects)
router.post('/deleteProject', managerController.deleteProject)
router.post('/deleteFile', managerController.deleteFile)


module.exports = router
