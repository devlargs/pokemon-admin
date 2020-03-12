<template>
  <a-layout-sider class="sidebar" breakpoint="lg" collapsedWidth="0">
    <div class="logo">
      <img v-bind:src="`${logo}pokemon.png`" />
    </div>
    <a-menu theme="dark" mode="inline" :selectedKeys="[selectedKey]">
      <a-menu-item key="/pokemons" @click="setActive">
        <router-link to="/pokemons">
          <span class="nav">
            <a-icon type="user" />
            <span class="nav-text">Pokemons</span>
          </span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/berries" @click="setActive">
        <router-link to="/berries">
          <span class="nav">
            <a-icon type="user" />
            <span class="nav-text">Berries</span>
          </span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import config from "@/utils/config";

export default {
  data() {
    return {
      selectedKey: "/pokemons"
    };
  },
  methods: {
    setActive({ key }) {
      this.selectedKey = key;
    }
  },
  created() {
    this.logo = config.s3ImgUrl;
  },
  mounted() {
    this.selectedKey = location.pathname;
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100vh;
  .nav {
    color: white;
    font-weight: bold;
  }
  .logo {
    padding: 20px;
    margin-top: 10px;
    text-align: center;
    img {
      width: 150px;
      height: 70px;
    }
  }
}
</style>
