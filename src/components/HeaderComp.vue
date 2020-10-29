<template>
  <div class="header">
    <b-container class="bv-example-row  bv-example-row-flex-cols">
      <b-row class="header-row" align-v="center">
        <b-col md="4" class="col-left">
          <div><i class="fa fa-phone"></i> <span>020-83312559</span></div>
          <div>
            <i class="fa fa-envelope-o"></i> <span>goldbangs@126.com</span>
          </div>
        </b-col>
        <b-col md="5" class="ml-auto col-right">
          <b-input-group>
            <template v-slot:prepend>
              <b-input-group-text
                ><i class="fa fa-search"></i
              ></b-input-group-text>
            </template>
            <b-form-input placeholder="搜索"></b-form-input>
          </b-input-group>
          <div class="login">登录</div>
          <div class="qr-code" id="tooltip-target">
            <i class="fa fa-qrcode fa-2x"></i>
            <span>二维码</span>
          </div>
          <b-tooltip target="tooltip-target" triggers="hover">
            <b-row
              cols="1"
              cols-sm="2"
              cols-md="2"
              cols-lg="2"
              class="tooltip-content"
            >
              <div>
                <img src="@/assets/images/shareRgCode.png" alt="黄金帮公众号" />
                <span>黄金帮公众号</span>
              </div>
              <div>
                <img
                  src="@/assets/images/blog/download_app_ccode.png"
                  alt="黄金帮App"
                />
                <span>黄金帮App</span>
              </div>
            </b-row>
          </b-tooltip>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BInputGroup,
  BInputGroupText,
  BFormInput,
  BTooltip,
} from "bootstrap-vue";
export default Vue.extend({
  name: "HeaderComp",
  components: {
    BContainer,
    BRow,
    BCol,
    BInputGroup,
    BInputGroupText,
    BFormInput,
    BTooltip,
  },
});
</script>

<style lang="scss" scoped>
.header {
  min-height: 49px;
  .container {
    height: 100%;
    color: #fff;
    .header-row {
      height: 100%;
      .col-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 6px;
        padding-bottom: 6px;
        i {
          color: #fe8724;
          margin-right: 5px;
        }
      }
      .col-right {
        display: flex;
        align-items: center;
        .login {
          width: 20%;
          text-align: center;
          cursor: pointer;
        }
        .qr-code {
          width: 40%;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fe8724;
          padding: 3px 0;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
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
      width: 120px;
    }
  }
}
</style>
