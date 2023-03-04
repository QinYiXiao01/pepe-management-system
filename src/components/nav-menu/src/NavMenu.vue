<template>
  <div class="nav-menu">
    <div class="logo-box">
      <img v-if="!collapse" class="logo" src="~@/assets/img/PEPE.png" alt="" />
      <img
        v-if="collapse"
        class="logo"
        src="~@/assets/img/PEPE_small.png"
        alt=""
      />
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      background-color="#6b807b"
      text-color="white"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单子标题 -->
          <el-sub-menu :index="item.id">
            <template #title>
              <!-- <el-icon>{{ iconNameModi }}</el-icon> -->
              <el-icon v-if="item.id === 38"><Menu /></el-icon>
              <el-icon v-else-if="item.id === 1"><Edit /></el-icon>
              <el-icon v-else-if="item.id === 9"><document /></el-icon>
              <el-icon v-else-if="item.id === 41"><comment /></el-icon>
              <span class="sub-menu-title">{{ item.name }}</span>
            </template>
            <!-- 遍历item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id"
                @click="handleMenuItemClick(subitem)"
              >
                <i class="el-icon {{ subitem.icon }}"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
    <template v-if="!collapse">
      <div class="copy-right">Developed by Pepe_de_Laogong</div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    const router = useRouter()

    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ? item.url : '/not-found'
      })
    }

    return { userMenus, handleMenuItemClick }
  }
})
</script>

<style scoped>
.logo-box {
  display: flex;
  height: 80px;
  align-items: center;
}
.logo {
  display: flex;
  height: 50px;
  width: fit-content;

  margin: 20px auto;

  border-radius: 10px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.4);
}

.sub-menu-title {
  font-size: large;
  font-weight: 700;
}

.el-menu-item {
  font-weight: 500;
}
.el-menu-item.is-active {
  background-color: #566662;
}

.copy-right {
  position: fixed;
  margin: 20px auto;
  text-align: center;
  font-size: 10px;
  font-weight: 200;
  bottom: 20px;
  left: 60px;
  color: #f0f1f0;
}
</style>
