<template>
  <el-card>
    <template #header>
      <el-text>Project name: {{ project?.name }}</el-text>
      <el-text>Publish date: {{ project?.createdAt }}</el-text>
    </template>
    <template #default>
      <el-text>автор</el-text>
      <el-collapse>
        <el-collapse-item title="Description">
          <el-text>
            {{ project }}
          </el-text>
        </el-collapse-item>
      </el-collapse>
    </template>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>

</style>