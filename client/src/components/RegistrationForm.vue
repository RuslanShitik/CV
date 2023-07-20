<template>
  <el-card>
    <template #header>
      <span>Registration</span>
    </template>
    <el-form
        label-position="top"
        v-model="user"
        size="large"
    >
      <el-form-item>
        <el-input placeholder="Full name" v-model="user.fullName"/>
      </el-form-item>
      <el-form-item>
        <el-input
            placeholder="Email"
            type="email"
            v-model="user.email"/>
      </el-form-item>
      <el-form-item>
        <el-input
            placeholder="Login"
            v-model="user.login"
        />
      </el-form-item>
      <el-form-item>
        <el-input
            placeholder="Password"
            v-model="user.password"
            type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleFormSubmit">Register</el-button>
      </el-form-item>
      <el-form-item>
        <el-button>Back</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import axios from "axios";
import {setUserToken} from "@/helpers/auth";

export default {
  //TODO: Validation and auth form
  name: "RegistrationForm",
  data(){
    return{
      user: {
        fullName: '',
        email: '',
        login: '',
        password: '',
      },
    }
  },
  methods: {
    async handleFormSubmit(){
      const response = await axios.post('http://localhost:3000/auth/register/', this.user)
      setUserToken(response.data.token)
      window.location.href ='/'
    }
  }
}
</script>

<style scoped>

</style>