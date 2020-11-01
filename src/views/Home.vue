<template>
  <div class="home">
    <!-- 功能介绍 -->
    <ContentComp>
      <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4" class="introduce">
        <b-col
          v-for="(item, index) in funIntroduce"
          :key="index"
          class="introduce-item"
        >
          <div>
            <img :src="getIcon(index)" />
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </b-col>
      </b-row>
    </ContentComp>

    <!-- 名师介绍 -->
    <ContentComp>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
      >
      </b-carousel>
    </ContentComp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BRow, BCol, BCarousel, BCarouselSlide } from "bootstrap-vue";
import { FUN_INTRODUCE } from "@/services/constant";
import { getAnalyst } from "@/services/api";
import ContentComp from "@/components/ContentComp.vue";
import * as ResType from "@/types/response";

@Component({
  components: {
    ContentComp,
    BRow,
    BCol,
    BCarousel,
    BCarouselSlide,
  },
})
export default class Home extends Vue {
  funIntroduce = FUN_INTRODUCE;
  analyst = [] as ResType.TeacherData[] | [];

  created() {
    this.getAnalyst();
  }

  async getAnalyst() {
    const res = await getAnalyst({ isWeb: 1, index: 1 });
    this.analyst = res.record;
  }

  getIcon(index: number): string {
    return require("../assets/images/home_icon/homepage_icon_0" +
      (index + 1) +
      ".png");
  }
}
</script>

<style lang="less" scoped>
.home {
  .introduce {
    .introduce-item {
      > div {
        height: 300px;
        width: 100%;
        background: #f7f7f7;
        -webkit-transition: 0.3s ease;
        transition: 0.3s ease;
        box-shadow: 3px 3px 14px 1px rgba(164, 61, 15, 0.22);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px 5px;
      }
      img {
        width: 80px;
        height: 80px;
        display: block;
      }
      h3 {
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        font-family: "Roboto", sans-serif;
        margin: 10px 0;
        display: inline-block;
        margin: 29px 0 20px 0;
      }
      p {
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        color: #000000;
        text-align: left;
        margin-bottom: 20px;
        padding: 0 24px;
        line-height: 22px;
      }
    }
  }
}
</style>
