<template>
  <div class="nav-header">
    <el-icon
      v-if="!isFold"
      style="cursor: pointer"
      size="40px"
      @click="handleFoldClick"
      ><Fold
    /></el-icon>
    <el-icon
      v-else-if="isFold"
      style="cursor: pointer"
      size="40px"
      @click="handleFoldClick"
      ><Expand
    /></el-icon>
    <div class="content">
      <div>面包新</div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              class="avatar"
              shape="square"
              :size="40"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
            />
            <span class="name">{{ name }}</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus">退出登录</el-dropdown-item>
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>综合管理</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick,
      name
    }
  }
})
</script>

<style scoped>
.nav-header {
  display: flex;
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  padding: 0 20px;

  font-weight: 500;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
}

.avatar {
  margin: 0 10px;
}

.user-info {
  cursor: pointer;
}
</style>
