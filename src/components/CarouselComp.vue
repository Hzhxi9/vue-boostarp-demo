<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script lang="ts">
import Vue from "vue";
import { BCarousel, BCarouselSlide } from "bootstrap-vue";
export default Vue.extend({
  name: "CarouselComp",
  components: {
    BCarousel,
    BCarouselSlide,
  },
});
</script>

<style lang="less" scoped></style>
