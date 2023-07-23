<template>
  <div>
    <el-row gutter="20">
      <el-col
          v-for="project in projects"
          :key="project.id"
          :span="12"
      >
        <ProjectItem :project="project"/>
      </el-col>
    </el-row>

    <el-row v-if="loading" gutter="20">
      <el-col
          v-for="project in Array(4)"
          :key="project"
          :span="12"
      >
        <ProjectItemSkeleton/>
      </el-col>
    </el-row>

    <el-row v-if="errors">
      <el-col>
        <el-result
            icon="error"
            title="Error"
            sub-title="Please follow the instructions"
        >
          <template #extra>
            <el-button type="primary">Reload page</el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>


  </div>
</template>

<script setup>
import ProjectItem from "@/components/ProjectItem.vue";
import {useProjects} from "@/hooks/useProjects";
import ProjectItemSkeleton from "@/components/ProjectItemSkeleton.vue";

const {projects, loading, errors} = useProjects()


</script>

<style scoped>
  .el-col{
    margin-bottom: 20px;
  }
  .el-col:last-child{
    margin-bottom: 0;
  }


  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>