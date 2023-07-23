<template>
  <LayoutComponent/>
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
<script setup>
import LayoutComponent from "@/components/layouts/LayoutComponent.vue";
import {onMounted} from "vue";
import {useStore} from "vuex";

const store = useStore()

onMounted(()=> {
  store.dispatch('getUserToken')
})
</script>