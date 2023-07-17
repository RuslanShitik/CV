<template>
  <el-container>
    <el-header>
      <HeaderBlock/>
    </el-header>
    <el-main>
      <router-view/>
      <span v-auth="true">Authorized!</span>
      <span v-auth="false">Unauthorized</span>
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