import ProjectService from "../services/ProjectService.js";
import { validationResult } from "express-validator"

class ProjectController {
    async create(req, res){
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json(errors.array())
            }
            const createdProject = await ProjectService.create(req.body, req.userId)
            return res.json(createdProject)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res){
        try {
            const projects = await ProjectService.getAll()
            return res.json(projects)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res){
        try {
            const project = await ProjectService.getOne(req.params.id)
            return res.json(project)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res){
        try {
            const updatedProject = await ProjectService.update(req.params.id, req.body)
            return res.json(updatedProject)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res){
        try {
            const deletedProject = await ProjectService.delete(req.params.id)
            return res.json(deletedProject)
        }
        catch (e) {
            console.log(e);
            res.status(500).json(e.message)
        }
    }
}

export default new ProjectController