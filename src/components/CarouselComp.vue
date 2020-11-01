<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="0"
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
        <b-container
          class="title-container bv-example-row bv-example-row-flex-cols"
          fluid
        >
          <h1>{{ item.title }}</h1>
          <p>{{ item.subtitle }}</p>
        </b-container>
        <img class="d-block img-fluid w-100" :src="item.img" alt="image slot" />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BCarousel, BCarouselSlide, BContainer } from "bootstrap-vue";
import { getBanner } from "@/services/api";
import { BannerPageData } from "@/types/response";

@Component({
  components: {
    BCarousel,
    BCarouselSlide,
    BContainer,
  },
})
export default class CarouselComp extends Vue {
  banner = [] as BannerPageData[];

  created() {
    this.getBanner();
  }

  async getBanner() {
    const res = await getBanner({ type: 1 });
    this.banner = res.record;
  }
}
</script>

<style lang="less" scoped>
.title-container {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  h1 {
    font-size: 45px;
    font-weight: 600;
    // width: 40%;
    line-height: 50px;
  }
  p {
    font-size: 15px;
    margin-bottom: 30px;
    // width: 40%;
  }
}
</style>
