<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // 用于更好地支持ts
import LoginPanel from './components/LoginPanel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/4.jpg');
  opacity: 90%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
