<template>
  <div id="app">
    <LayoutComp>
      <template v-slot:header>
        <HeaderComp />
      </template>
      <template v-slot:main>
        <NavComp />
        <router-view />
      </template>
    </LayoutComp>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutComp from "@/components/LayoutComp.vue";
import NavComp from "@/components/NavComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default Vue.extend({
  name: "App",
  components: {
    LayoutComp,
    HeaderComp,
    NavComp,
  },
});
</script>

<style lang="scss">
@media only screen and (min-width: 540px) {
  .tooltip-inner {
    min-width: 300px !important;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/custom.scss";
@import "@/assets/styles/normalize.scss";
</style>
