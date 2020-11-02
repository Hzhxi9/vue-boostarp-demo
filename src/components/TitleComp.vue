<template>
  <div class="title" :style="{ backgroundImage: `url(${bgImg})` }">
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class TitleComp extends Vue {
  @Prop({ default: "" }) readonly title: string | undefined;
  @Prop({ default: "" }) readonly bgImg: string | undefined;
}
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 350px;
  background: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #ffffff;
    font-size: 44px;
    font-family: SimSun;
  }
}
</style>
