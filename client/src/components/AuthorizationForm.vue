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
          <el-input
              v-model="userForm.password"
              type="password"
              placeholder="Password"
          />
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
import axios from "axios";
import { reactive } from "vue";
import { setUserToken } from "@/helpers/auth";
import { ElMessage } from "element-plus";
import {useStore} from "vuex";

const store = useStore()

const userForm = reactive({
  login: '',
  password: '',
})

const onSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login/', userForm)
    if(response.status === 200){
      console.log('this.$store:', store)
      store.commit('setUserData', { user: { isAuth: true }});
      setUserToken(response.data.token);
    }
  }
  catch (e) {
    console.log(e)
    ElMessage.error(e.response?.data?.message)
  }

  //todo: refactor and status valid messages (front+back), refactor directive, change navigate and add store for user
}
</script>