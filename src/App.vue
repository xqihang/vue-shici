<template>
  <div class="g-layout">

    <div class="g-header" v-if="pageTitle">{{pageTitle}}</div>

    <router-view/>

    <div class="g-footer">
      <a href="/">首页</a>
      <a href="/about">独白</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    pageTitle() {
      return this.$route.meta.title || ''
    }
  }
}
</script>

<style lang="scss">
  .g-layout {
    padding-top: 0.3rem;
    width: 100%;
    max-width: 5rem;
    margin: 0 auto;
    .g-header {
      font-size: 0.2rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
    .g-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1rem;
      font-size: 0.15rem;
      font-weight: bold;
      a {
        margin: 0 0.15rem;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .g-header {
      text-align: center;
    }
  }
</style>