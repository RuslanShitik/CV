<template>
  <el-form
      label-position="top"
      v-model="project"
  >
    <span>Create new project</span>
    <el-form-item label="Project name">
      <el-input v-model="project.name"/>
    </el-form-item>
    <el-form-item label="GitHub/GitLab link">
      <el-input v-model="project.gitLink"/>
    </el-form-item>
    <el-form-item label="Description">
      <el-input
          maxlength="200"
          type="textarea"
          v-model="project.description"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default {
  name: "CreateProject",
  data(){
    return{
      project:{
        name: '',
        gitLink: '',
        description: '',
      },
    }
  },
  methods: {
    async submitForm(){
      const response = await axios.delete('http://localhost:3000/api/project/')
      console.log(response)
      await axios.post('http://localhost:3000/api/project/', this.project)
    }
  },
}
</script>

<style scoped>

</style>