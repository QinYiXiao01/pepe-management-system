<template>
  <div class="login-phone">
    <el-form :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="account.phone"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input type="text" v-model="account.code"></el-input>
          <el-button class="get-button" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })

    return {
      account
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-button {
  margin-left: 10px;
}
</style>
