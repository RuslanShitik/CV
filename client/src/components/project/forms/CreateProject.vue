<template>
  <el-card>
    <template #header>
      <span>Create new project</span>
    </template>
    <template #default>
      <el-form
          label-position="top"
          v-model="projectForm"
          :disabled="loading"
      >
        <el-form-item label="Project name">
          <el-input v-model="projectForm.name"/>
        </el-form-item>
        <el-form-item label="GitHub/GitLab link">
          <el-input v-model="projectForm.gitLink"/>
        </el-form-item>
        <el-form-item label="Description">
          <el-input
              maxlength="200"
              type="textarea"
              v-model="projectForm.description"
          />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="onSubmit">Create</el-button>
        </el-form-item>
      </el-form>
    </template>
  </el-card>
</template>

<script setup>
import {reactive, ref} from "vue";
import api from "@/helpers/api";
import {ElMessage} from "element-plus";
import {getMessageByErrorCode} from "@/helpers/messages"

const projectForm = reactive({
  name: '',
  gitLink: '',
  description: '',
})

const loading = ref(false)

const onSubmit = () => {
  loading.value = true;
  api.post('http://localhost:3000/api/project', projectForm)
      .then(() => {
        ElMessage.success('Пост успешно добавлен!')
        Object.assign(projectForm, {});
      })
      .catch((e) => {
        console.log(e)
        ElMessage.error(getMessageByErrorCode(e.response.status))
      })
      .finally(() => {
        loading.value = false
      })
}
</script>

<style scoped>

</style>