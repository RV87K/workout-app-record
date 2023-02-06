import e from 'express'
import 'colors'
import express from 'express'
import { authUser } from './auth.controller.js'

const router = express.Router()

router.post('/login').post(authUser)

export default router

