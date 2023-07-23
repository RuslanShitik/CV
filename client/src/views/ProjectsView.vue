<template>
  <el-row justify="center">
    <el-col :span="20">
      <CreateProject/>
      <ProjectList/>
    </el-col>
  </el-row>
</template>

<script>
import CreateProject from "@/components/CreateProject.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "ProjectsView",
  components: {ProjectList, CreateProject}
}
</script>

<style scoped>

</style>