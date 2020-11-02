import router from "@/router";
import { Dictionary } from "vue-router/types/router";
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class Mixins extends Vue {
  get ticket(): string | null {
    return this.$store.state.ticket;
  }
  jumpToPage(query: Dictionary<string> | string) {
    if (typeof query === "string") {
      window.location.href = query;
    } else {
      router.push(query);
    }
  }
}
