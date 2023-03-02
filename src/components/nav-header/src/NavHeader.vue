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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped></style>
