<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-text size="large">{{ project?.name }}</el-text>
        <el-text size="small" type="info">{{ moment(project?.createdAt).fromNow()}}</el-text>
      </div>
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
import moment from "moment";
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>