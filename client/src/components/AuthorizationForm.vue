<template>
  <el-card>
    <template #header>
      <span>Sign in</span>
    </template>
    <template #default>
      <el-form v-model="userForm">
        <el-form-item>
          <el-input v-model="userForm.login" placeholder="Login"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userForm.password" placeholder="Password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-100" @click="onSubmit">Log in</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="w-100">Back</el-button>
        </el-form-item>
      </el-form>
    </template>
  </el-card>
</template>

<script setup>

import { reactive } from "vue";

const userForm = reactive({
  login: '',
  password: '',
})

const onSubmit = () => {
  console.log('formdata', userForm)
}
</script>

<style scoped>

</style>