<template>
  <b-container class="tbv-example-row bv-example-row-flex-cols container">
    <div class="header">
      <h2>标题</h2>
      <p>描述</p>
    </div>
    <div class="main">
      <slot />
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BContainer } from "bootstrap-vue";

@Component({
  components: {
    BContainer,
  },
})
export default class ContentComp extends Vue {}
</script>

<style lang="less" scoped>
.container {
  margin-top: 100px;
  width: 100%;
  background: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  .header {
    h2 {
      font-size: 42.54px;
      color: #323232;
      font-family: Adobe Heiti Std;
      font-weight: bold;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
      padding-bottom: 30px;
      &::after,
      &::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      &::before {
        border-left: 50px solid #dadada;
        border-right: 50px solid #dadada;
        bottom: 1px;
        content: "";
        height: 1px;
        left: 50%;
        margin-left: -70px;
        position: absolute;
        width: 130px;
      }
      &::after {
        background: #ff8724 none repeat scroll 0 0 padding-box content-box;
        border-bottom: 1px solid #dadada;
        border-left: 1px solid #dadada;
        bottom: -10px;
        content: "";
        height: 22px;
        left: 50%;
        margin-left: -16px;
        padding: 0 0 8px 8px;
        position: absolute;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        width: 22px;
      }
    }
    p {
      text-align: left;
      color: #707070;
      font-size: 15px;
      padding: 0 13.021vw;
      margin: 0 0 100px 0;
      font-family: "Open Sans", sans-serif;
      line-height: 22px;
    }
  }
}
</style>
