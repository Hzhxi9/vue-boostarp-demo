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
      尾部
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BContainer, BRow, BCol } from "bootstrap-vue";

export default Vue.extend({
  name: "LayoutComp",
  components: {
    // BContainer,
    // BRow,
    // BCol,
  },
});
</script>

<style lang="scss" scoped>
.layout {
  .header {
    background: #333;
  }
}
</style>
