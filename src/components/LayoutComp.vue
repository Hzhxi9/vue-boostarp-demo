<template>
  <div class="layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="carousel" />
      <slot name="main" />
    </main>
    <footer>
      <footer-comp />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BContainer, BRow, BCol } from "bootstrap-vue";
import FooterComp from "@/components/FooterComp.vue";

export default Vue.extend({
  name: "LayoutComp",
  components: {
    FooterComp,
  },
});
</script>

<style lang="scss" scoped>
.layout {
  .header {
    background: #333;
  }
  footer {
    min-height: 359px !important;
    background-color: #343434;
    color: #fff;
    padding-top: 50px;
    position: relative;
  }
  main {
    position: relative;
  }
}
</style>
