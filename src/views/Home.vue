<template>
  <div class="page-index">
    <poetry v-for="item in data" :key="item.id" :data="item"></poetry> 
  </div>
</template>

<script>
import { listAll } from '@/api/index'
import Poetry from '@/components/poetry'
export default {
  name: 'Index',
  components: {
    Poetry
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    listAll().then(res => {
      this.data = res;
    })
  }
}
</script>

<style scoped lang="scss">
  .page-index {
  }
</style>
