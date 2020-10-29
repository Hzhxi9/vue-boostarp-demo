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
    <b-carousel-slide v-for="(item, index) in banner" :key="index">
      <template #img>
        <img
          class="d-block img-fluid w-100"
          :src="item.img"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BCarousel, BCarouselSlide } from "bootstrap-vue";
import { getBanner } from "@/services/api";
import { BannerPageData } from "@/types/response";

@Component({
  components: {
    BCarousel,
    BCarouselSlide,
  },
})
export default class CarouselComp extends Vue {
  banner = [] as BannerPageData[];

  created() {
    this.getBanner()
  }

  async getBanner() {
    const res = await getBanner({ type: 1 });
    this.banner = res.record;
  }
}
</script>

<style lang="less" scoped></style>
