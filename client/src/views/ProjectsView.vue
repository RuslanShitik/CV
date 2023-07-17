<template>
  <el-row>
    <el-col :span="24">
      <CreateProject/>
    </el-col>
  </el-row>
</template>

<script>
import CreateProject from "@/components/CreateProject.vue";

export default {
  name: "ProjectsView",
  components: {CreateProject}
}
</script>

<style scoped>

</style>