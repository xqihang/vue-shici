<template>
  <div class="page-index">
    <poetry v-for="item in data" :key="item.id" :data="item"></poetry> 
  </div>
</template>

<script>
import { findByUserId } from '@/api/index'
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
    findByUserId(this.$route.params.id).then(res => {
      this.data = res;
    })
  }
}
</script>

<style scoped lang="scss">
  .page-index {
    width: 100%;
    max-width: 5rem;
    margin: 0 auto;
  }
</style>
