<template>
  <el-row justify="center">
    <el-col :xs="24" :sm="10" :lg="8" :xl="4">
      <AuthorizationForm/>
    </el-col>
  </el-row>
</template>

<script>
import AuthorizationForm from "@/components/AuthorizationForm.vue";

export default {
  name: "AuthorizationView",
  components: {AuthorizationForm}
}
</script>

<style scoped>

</style>