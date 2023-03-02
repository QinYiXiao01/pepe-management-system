<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="text"
          v-model="account.password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import LocalCache from '@/utils/cache'
import { rules } from '../config/account-config'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid: boolean) => {
        if (valid) {
          // console.log('执行真正的登录逻辑')
          if (isKeepPassword) {
            // 1.判断是否记住密码
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          }
        } else {
          LocalCache.deleteCache('name')
          LocalCache.deleteCache('password')
        }
        // 2.进行登录验证
        store.dispatch('login/accountLoginAction', { ...account }) //传进账号和密码as payload，用展开运算符拿到属性
      }) // 验证是否合法，并对返回的valid进行回调
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
