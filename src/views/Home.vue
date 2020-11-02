<template>
  <div class="home">
    <!-- 功能介绍 -->
    <ContentComp>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4" class="introduce">
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
        id="carousel-1"
        style="text-shadow: 0px 0px 2px #000"
        controls
        indicators
      >
        <b-carousel-slide
          v-for="(item, index) in Math.ceil(analyst.length / 4)"
          :key="index"
        >
          <template v-slot:img>
            <b-row
              cols="2"
              cols-sm="2"
              cols-md="4"
              cols-lg="4"
              class="analyst-list"
            >
              <b-col
                v-for="(cItem, cIndex) in analyst.slice(
                  4 * index,
                  4 * (index + 1)
                )"
                :key="cIndex"
                class="analyst-item"
              >
                <div>
                  <img :src="cItem.faceUrl" :alt="cItem.nickName" />
                  <h3>{{ cItem.nickName }}</h3>
                  <p>{{ cItem.position }}</p>
                </div>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </ContentComp>

    <!-- TD学堂 -->
    <ContentComp>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3" class="tutor-list">
        <b-col v-for="item in 3" :key="item" class="tutor-item">
          <router-link :to="toPage[item]">
            <img :src="getTutorIcon(item)" />
          </router-link>
        </b-col>
      </b-row>
    </ContentComp>

    <!-- 合作机构 -->
    <ContentComp>
      <b-row
        :cols="cooperateList.length / 3"
        :cols-sm="cooperateList.length / 2"
        :cols-md="cooperateList.length / 2"
        :cols-lg="cooperateList.length"
        class="cooperate-list"
      >
        <b-col
          v-for="(item, index) in cooperateList"
          :key="index"
          class="cooperate-item"
        >
          <a :href="item.link">
            <img :src="item.thumb" :alt="item.name" />
          </a>
        </b-col>
      </b-row>
    </ContentComp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BRow, BCol, BCarousel, BCarouselSlide } from "bootstrap-vue";
import { FUN_INTRODUCE } from "@/services/constant";
import { getAnalyst, getCooperateList } from "@/services/api";
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
  cooperateList = [] as ResType.CoopListData[] | [];
  toPage = {
    1: "/tutor",
    2: "/open",
    3: { name: "Tutor", params: { isTrade: true } },
  };

  created() {
    this.getAnalyst();
    this.getCooperateList();
  }

  async getAnalyst() {
    const res = await getAnalyst({ isWeb: 1, index: 1 });
    this.analyst = res.record;
  }

  async getCooperateList() {
    const res = await getCooperateList({ index: 1, size: 20 });
    this.cooperateList = res;
  }

  getIcon(index: number): string {
    return require("../assets/images/home_icon/homepage_icon_0" +
      (index + 1) +
      ".png");
  }
  getTutorIcon(index: number): string {
    return require("../assets/images/TD_imgs/TD_img_" + index + ".png");
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
  .analyst-list {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    .analyst-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding-bottom: 15px;
      img {
        width: 120px;
        height: 120px;
      }
      h3 {
        font-size: 20px;
        padding: 30px 0 19px 0;
      }
      p {
        font-size: 14px;
      }
    }
  }
  .tutor-item {
    padding-bottom: 15px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .cooperate-list {
    .cooperate-item {
      padding-bottom: 15px;
      a {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
