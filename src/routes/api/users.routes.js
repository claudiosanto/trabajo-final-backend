import { Router } from "express"
import { createUsers, getAllUsers, getByid, } from '../../controllers/api/users.controllers.js'

const usersRouters = Router()

usersRouters.get("/", getAllUsers)
usersRouters.get('/:id', getByid)
usersRouters.post("/", createUsers)

export default usersRouters

