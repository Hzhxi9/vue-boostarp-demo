<template>
  <div class="footer-container">
    <b-container class="bv-example-row  bv-example-row-flex-cols ">
      <b-row class="footer-row">
        <b-col md="4" class="col-left">
          <div><i class="fa fa-phone"></i> <span>020-83312559</span></div>
          <div>
            <i class="fa fa-envelope-o"></i> <span>goldbangs@126.com</span>
          </div>
          <div>
            <i class="fa fa-location-arrow"></i>
            <span>广州市越秀区东风东路761号 丽丰中心25层</span>
          </div>
        </b-col>
        <b-col md="4" class="col-center">
          <p>
            黄金帮是由广东南方黄金市场研究院联合广东粤宝黄金投资有限公司运营的贵金属投资者教育和资讯服务平台。黄金帮传承“淬炼金银，创新为民”的理念，为广大用户提供优质，便捷的贵金属投资资讯服务。˝
          </p>
        </b-col>
        <b-col md="4" class="col-right">
          <b-row
            cols="1"
            cols-sm="2"
            cols-md="2"
            cols-lg="2"
            class="tooltip-content"
          >
            <div>
              <img src="@/assets/images/shareRgCode.png" alt="黄金帮公众号" />
              <span>扫码关注黄金帮公众号</span>
            </div>
            <div>
              <img
                src="@/assets/images/blog/download_app_ccode.png"
                alt="黄金帮App"
              />
              <span>扫码下载黄金帮APP</span>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-bottom">
      <p>
        Copyright@1995-2020,<a href="##">goldbangs.com</a> All rights reserved.
        <a href="http://beian.miit.gov.cn">粤ICP备14057378号</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BContainer, BRow, BCol } from "bootstrap-vue";

@Component({
  components: { BContainer, BRow, BCol },
})
export default class FooterComp extends Vue {}
</script>

<style lang="less" scoped>
.footer-container {
  position: relative;
  height: 359px !important;
}
.footer-row {
  .col-left {
    margin-bottom: 15px;
    div {
      i {
        margin-right: 9px;
      }
      &:nth-of-type(2) {
        padding: 60px 0;
      }
    }
  }
  .col-right {
    span {
      margin-top: 26px;
      font-size: 12px;
    }
  }
  .tooltip-content {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 150px;
      }
    }
  }
}
.footer-bottom {
  background: #2f2f2f;
  width: 100%;
  padding: 15px 0;
  box-shadow: 0px -6px 11px 1px rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  p {
    text-align: center;
    font-size: 14px;
    color: #fff;
    a {
      color: #45bfff;
    }
  }
}
</style>
