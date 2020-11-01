<template>
  <div id="app">
    <LayoutComp>
      <template v-slot:header>
        <HeaderComp />
      </template>
      <template v-slot:main>
      <!-- <CarouselComp /> -->
        <!-- <NavBar /> -->
        <router-view />
      </template>
    </LayoutComp>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutComp from "@/components/LayoutComp.vue";
import NavBar from "@/components/NavBar.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import CarouselComp from "@/components/CarouselComp.vue";
export default Vue.extend({
  name: "App",
  components: {
    LayoutComp,
    HeaderComp,
    // CarouselComp,
    // NavBar,
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
