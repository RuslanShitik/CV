import Project from "./models/Project.js";

class ProjectService {
    async create(project){
        const createdProject = await Project.create(project);
        return createdProject
    }

    async getAll(){
        const allProjects = await Project.find()
        return allProjects
    }
    async getOne(id){
        if (!id){
            throw new Error('id is required!')
        }
        else{
            const project = await Project.findById(id)
            return project
        }
    }
    async update(id, project){
        if (!id){
            throw new Error('id is required!')
        }
        else if (!project){
            throw new Error('params is required!')
        }
        else{
            const updatedProject = await Project.findByIdAndUpdate(id, project, {new: true})
            return updatedProject
        }
    }
    async delete(id){
        if (!id){
            throw new Error('id is required!')
        }
        else{
            const deletedProject = await Project.findByIdAndDelete(id)
            return deletedProject
        }
    }
}

export default new ProjectService()