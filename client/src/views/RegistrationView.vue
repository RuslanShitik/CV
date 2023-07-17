<template>
  <el-row justify="center">
    <el-col :xs="24" :sm="10" :lg="8" :xl="6">
      <RegistrationForm/>
    </el-col>
  </el-row>
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
  name: "RegistrationView",
  components: {RegistrationForm}
}
</script>

<style scoped>

</style>