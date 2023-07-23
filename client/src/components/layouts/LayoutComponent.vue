<template>
  <el-container>
    <el-header>
      <HeaderBlock/>
    </el-header>
    <el-main>
      <router-view/>
      <p v-auth="true">Authorized!</p>
      <p v-auth="false">Unauthorized</p>
      <p>user data: {{ $store.state.user }}</p>
    </el-main>
  </el-container>
</template>

<script>
import HeaderBlock from "@/components/layouts/HeaderBlock.vue";

export default {
  name: "LayoutComponent",
  components: {HeaderBlock}
}
</script>

<style scoped>

</style>