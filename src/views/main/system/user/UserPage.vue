<template>
  <div class="user">
    <div class="search">
      <!-- <pepe-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
      ></pepe-form> -->
      <pepe-form v-bind="searchFormConfig"></pepe-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PepeForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'userPage',
  components: {
    PepeForm
  },

  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
