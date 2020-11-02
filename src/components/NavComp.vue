<template>
  <div
    class="nav"
    :class="isMobile ? 'main-color' : isFixed ? 'is-fixed' : 'is-absolute'"
  >
    <b-container class="nav_box">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#">
          <img src="@/assets/images/wxLogin_goldBangs_logo_2.png" alt="" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav align="right">
            <b-nav-item
              v-for="(item, index) in NAV"
              :key="index"
              :to="item.path"
              :class="item.path === currentPath ? 'active' : ''"
              >{{ item.name }}</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NAV } from "@/utils/constant";
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BContainer,
} from "bootstrap-vue";

export default Vue.extend({
  name: "NavComp",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BContainer,
  },
  data() {
    return {
      NAV,
      isFixed: false,
      offsetTop: 49,
      isMobile: false,
    };
  },
  computed: {
    currentPath(): string {
      return this.$route.path;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    window.addEventListener("resize", () => {
      this.isMobile = document.body.clientWidth <= 992 ? true : false;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight(): void {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = top > this.offsetTop ? true : false;
    },
  },
});
</script>

<style scoped lang="scss">
.nav.main-color {
  background-color: #333;
}
.is-absolute {
  position: absolute;
  top: 0;
  left: 0;
}

.nav {
  width: 100%;
  background-color: transparent;

  z-index: 2;
}
::v-deep .navbar-nav {
  width: 100%;
}
.navbar-brand img {
  width: 109px;
  height: 30px;
}
.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.nav_box {
  background: transparent;
  -webkit-transition: 1s ease;
  transition: 1s ease;
}
.is-fixed.nav {
  background: rgba(3, 3, 3, 0.8);
  border-radius: 0;
  -webkit-transition: 1s ease;
  transition: 1s ease;
  border: 0 none;
}

.nav_box {
  .nav-item .nav-link {
    color: #fff;
  }
  .collapse {
    .navbar-nav {
      .active {
        color: #ff8724;
        .router-link-active {
          color: #ff8724;
        }
      }
    }
  }
}
@media (min-width: 992px) {
  .nav_box {
    .navbar-nav {
      li {
        position: relative;
        font-size: 14px;
        a {
          color: #ffffff;
          font-weight: 600;
          padding: 6px 15px;
          position: relative;
          text-transform: uppercase;
          &::before {
            background: transparent none repeat scroll 0 0;
            border-left: 1px solid #ff8724;
            border-top: 1px solid #ff8724;
            content: "";
            height: 10px;
            left: -70px;
            position: absolute;
            top: 0;
            width: 25px;
            visibility: hidden;
            -webkit-transition: 0.3s ease;
            transition: 0.3s ease;
            opacity: 0;
          }
          &::after {
            background: transparent none repeat scroll 0 0;
            border-right: 1px solid #ff8724;
            border-bottom: 1px solid #ff8724;
            content: "";
            height: 10px;
            right: 70px;
            position: absolute;
            bottom: 0;
            width: 25px;
            visibility: hidden;
            -webkit-transition: 0.3s ease;
            transition: 0.3s ease;
            opacity: 0;
          }
          &:hover,
          &:focus {
            background: none;
            color: #ff8724;
            outline: none;
            box-shadow: none;
            &::after,
            &::before {
              visibility: visible;
              opacity: 1;
              right: 0;
            }
            &::before {
              background: transparent none repeat scroll 0 0;
              border-left: 1px solid #ff8724;
              border-top: 1px solid #ff8724;
              content: "";
              height: 10px;
              left: 0;
              position: absolute;
              top: 0;
              width: 25px;
              visibility: visible;
              opacity: 1;
            }
            &::after {
              background: transparent none repeat scroll 0 0;
              border-right: 1px solid #ff8724;
              border-bottom: 1px solid #ff8724;
              content: "";
              height: 10px;
              right: 0;
              position: absolute;
              bottom: 0;
              width: 25px;
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }
      .active {
        position: relative;
        a {
          color: #ff8724;
          &::before,
          &::after {
            background: transparent none repeat scroll 0 0;
            content: "";
            width: 25px;
            height: 10px;
            visibility: visible;
            opacity: 1;
            position: absolute;
          }
          &::before {
            border-left: 1px solid #ff8724;
            border-top: 1px solid #ff8724;
            left: 0;
            top: 0;
          }
          &::after {
            border-right: 1px solid #ff8724;
            border-bottom: 1px solid #ff8724;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
