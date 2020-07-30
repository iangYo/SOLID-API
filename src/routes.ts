import { Router, Request, Response } from "express";
import { createUserController } from "./UseCases/CreateUser";

const router = Router()

router.get('/users', (req, res) => {
    return createUserController.handle(req, res)
})

router.post('/users', (req, res) => {
    return createUserController.handle(req, res)
})

export { router }