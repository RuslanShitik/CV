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
  </el-form>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>