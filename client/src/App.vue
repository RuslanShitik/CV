<template>
  <el-menu
      mode="horizontal"
  >
    <el-menu-item index="1">
      <router-link to="/">
        Главная
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/projects">
        Проекты
      </router-link>
    </el-menu-item>
    <div class="flex-grow-1"/>
    <el-menu-item index="3">
      Вход
    </el-menu-item>
    <el-menu-item index="4">
      Регистрация
    </el-menu-item>
    <router-link to="/profile">
      <el-menu-item index="5">
        Профиль
      </el-menu-item>
    </router-link>
  </el-menu>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
