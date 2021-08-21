<template>
  <div id="app">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<style lang="scss" src="./assets/main.scss"></style>
<script>
export default {
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;

        this.$Progress.parseMeta(meta);
      }

      this.$Progress.start();
      next();
    });

    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  },
};
</script>