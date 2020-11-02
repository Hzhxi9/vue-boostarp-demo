<template>
  <div class="teacher">
    <TitleComp title="黄金分析师" :bgImg="teacherBg" />
    <div class="main">
      <b-container class="teacher-container">
        <b-row
          cols="1"
          cols-sm="2"
          cols-md="3"
          cols-lg="4"
          class="teacher-list"
          v-for="(index, item) in Math.ceil(analystList.length / 4)"
          :key="index"
        >
          <b-col
            v-for="(e, i) in analystList.slice(4 * item, 4 * (item + 1))"
            :key="i"
            class="teacher-item"
          >
            <div class="top">
              <b-img
                rounded="circle"
                alt="Circle image"
                :src="e.faceUrl"
              ></b-img>
              <h3>{{ e.nickName }}</h3>
              <p>{{ e.position }}</p>
            </div>
            <div class="bottom">
              <p
                v-html="getHTMLDecode(e.brief)"
                class=" cursor-pointer"
                :class="
                  isMore.includes(`${index}:${i}`) ? '' : 'text-ellipsis-3'
                "
                @click="
                  isMore.includes(`${index}:${i}`)
                    ? isMore.splice(
                        isMore.findIndex((e) => e === `${index}:${i}`),
                        1
                      )
                    : isMore.push(`${index}:${i}`)
                "
              ></p>
            </div>
          </b-col>
        </b-row>
        <div class="mt-3 pagination-container">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            align="center"
            size="lg"
            first-number
            last-number
          ></b-pagination>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BContainer, BRow, BCol, BImg, BPagination } from "bootstrap-vue";
import { getAnalyst } from "@/services/api";
import TitleComp from "@/components/TitleComp.vue";
import * as ResTypes from "@/types/response";
@Component({
  components: {
    TitleComp,
    BContainer,
    BRow,
    BCol,
    BImg,
    BPagination,
  },
})
export default class Teacher extends Vue {
  teacherBg = require("../assets/images/team_banner.png");
  analystList: ResTypes.TeacherData[] = [];
  isMore: string[] = [];
  total = 0;
  pageNo = 1;
  totalPage = 0;
  created() {
    this.getAnalyst();
  }

  async getAnalyst() {
    const res = await getAnalyst({ isWeb: 1, index: this.pageNo });
    this.analystList = [...this.analystList, ...res.record];
    this.totalPage = res.totalPage;
    this.total = res.total;
  }
  getHTMLDecode(val: string) {
    const reg = new RegExp("&lt;br/&gt", "g");
    console.log(reg, "");
    return val.replace(reg, "");
  }
}
</script>

<style lang="less" scoped>
.teacher {
  .main {
    padding: 85px 0;
  }
  .teacher-container {
    display: flex;
    flex-wrap: wrap;
    .teacher-list {
      align-items: start;
      .teacher-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        .top {
          text-align: center;
          width: 100%;
          border-bottom: 1px solid #eee;
          img {
            width: 120px;
            height: 120px;
          }
          h3 {
            font-weight: 600;
            margin-bottom: 10px;
            margin-top: 15px;
            font-size: 18px;
          }
          p {
            margin-bottom: 1em;
          }
        }
        .bottom {
          margin-top: 1em;
          margin-bottom: 80px;
          position: relative;
          p {
            line-height: 22px;
          }
        }
      }
    }
  }
  .pagination-container {
    width: 100%;
  }
}
</style>
