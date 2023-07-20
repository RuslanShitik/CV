<template>
  <el-menu
      mode="horizontal"
      :ellipsis="true"
  >
    <el-menu-item index="1" @click="$router.push('/')">
      Главная
    </el-menu-item>
    <el-menu-item index="2" @click="$router.push('/projects')">
      Проекты
    </el-menu-item>
    <div class="flex-grow-1"/>
    <div class="d-flex align-items-center px-3">
      <el-button v-auth="false" @click="$router.push('/auth')">
        Log in
      </el-button>
      <el-button type="primary" v-auth="false" @click="$router.push('/registration')">
        Sign in
      </el-button>
    </div>

    <el-menu-item index="5" v-auth="true">
      <el-sub-menu index="5-2">
        <template #title>Profile</template>
        <el-menu-item index="5-2-1" @click="$router.push('/profile')">
          View
        </el-menu-item>
        <el-menu-item index="5-2-2" @click="logOut">
          Logout
        </el-menu-item>
      </el-sub-menu>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {logOutUser} from "@/helpers/auth";

export default {
  name: "HeaderBlock",
  methods: {
    logOut(){
      logOutUser();
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>

</style>