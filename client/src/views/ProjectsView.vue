<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-12">
        <CreateProject/>
      </div>
    </div>
  </div>
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