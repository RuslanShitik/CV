import {Router} from "express";
import ProjectController from "../controllers/ProjectController.js"

const projectRouter = new Router()

projectRouter.post('/project', ProjectController.create)
projectRouter.get('/project', ProjectController.getAll)
projectRouter.get('/project/:id', ProjectController.getOne)
projectRouter.put('/project/:id', ProjectController.update)
projectRouter.delete('/project/:id', ProjectController.delete)

export default projectRouter;