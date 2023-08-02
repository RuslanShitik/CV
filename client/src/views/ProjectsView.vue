<template>
  <el-row justify="center" :gutter="20">
    <el-col :span="10">
      <CreateProject/>
    </el-col>
    <el-col :span="20">
      <ProjectList/>
    </el-col>
  </el-row>
</template>

<script>
import CreateProject from "@/components/project/forms/CreateProject.vue";
import ProjectList from "@/components/project/ProjectList.vue";

export default {
  name: "ProjectsView",
  components: {ProjectList, CreateProject}
}
</script>

<style scoped>
.el-col{
  margin-bottom: 20px;
}
</style>