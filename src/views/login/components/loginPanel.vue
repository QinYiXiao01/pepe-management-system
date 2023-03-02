<template>
  <div class="login-panel">
    <img class="logo" src="..\..\..\assets\img\PEPE.png" alt="" />
    <div class="card">
      <h1 class="title">欢迎</h1>
      <el-tabs
        class="demo-tabs"
        @tab-click="handleClick"
        v-model="activeName"
        stretch
      >
        <el-tab-pane label="账号登陆" name="first"
          ><login-account ref="accountRef"></login-account
        ></el-tab-pane>
        <el-tab-pane label="手机登录" name="second"
          ><login-phone></login-phone
        ></el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">保持登入</el-checkbox>
        <el-link>忘记密码</el-link>
      </div>
      <el-button class="login-button" @click="handleLoginClick">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeName = ref('first')
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>() // 登陆行为,注意写法

    const handleLoginClick = () => {
      // console.log('登录请求发送')
      // 取得accountRef对象，然后调取子组件的action方法触发登录事件
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return { activeName, isKeepPassword, handleLoginClick, accountRef }
  }
})
</script>

<style lang="less">
.login-panel {
  margin-bottom: 150px;
}
.logo {
  display: flex;
  width: 300px;
  height: 100px;

  margin: 0 auto;
  margin-bottom: 30px;

  border-radius: 10px;
  box-shadow: 0 4px 2px rgba(black, 0.2);
}

.card {
  background-color: white;
  padding: 10px;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 6px 2px rgba(black, 0.2);
  // display: flex;
}

.title {
  color: #6b778c;
  text-align: center;
  font-size: 40px;
}

.demo-tabs > .el-tabs__content {
  padding: 15px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-form-item:last-child {
  margin-bottom: 5px;
}

.account-control {
  display: flex;
  justify-content: space-around;
  // margin-top: 10px;
}

.login-button {
  width: 50%;
  display: flex;
  margin: 20px auto;
}
</style>
