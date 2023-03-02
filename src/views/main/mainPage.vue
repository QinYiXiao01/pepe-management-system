<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '300px'">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue' // 用于更好地支持ts
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header/src/NavHeader.vue'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.el-header {
  display: flex;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 80px;
  background-color: #cfdcea;
}

.el-aside {
  background-color: #6b807b;
  // line-height: 200px;
  color: white;
  transition: all 0.2s;
}

.el-main {
  text-align: center;
  background-color: #f0f1f0;
}
</style>
