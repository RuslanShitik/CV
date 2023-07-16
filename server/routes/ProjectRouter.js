import {Router} from "express";
import ProjectController from "../controllers/ProjectController.js"
import {createProjectValidator} from "../validations/Project.js";
import checkAuth from "../utils/checkAuth.js";

const projectRouter = new Router()

projectRouter.post('/project', checkAuth, createProjectValidator, ProjectController.create)
projectRouter.get('/project', ProjectController.getAll)
projectRouter.get('/project/:id', ProjectController.getOne)
projectRouter.put('/project/:id', checkAuth, ProjectController.update)
projectRouter.delete('/project/:id', checkAuth, ProjectController.delete)

export default projectRouter;