<template>
  <a-layout-sider class="sidebar" breakpoint="lg" collapsedWidth="0">
    <div class="logo">
      <img v-bind:src="'img/pokemon.png'" />
    </div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1">
        <router-link to="/">
          <a-icon type="user" />
          <span class="nav-text">Pokemon</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/about">
          <a-icon type="user" />
          <span class="nav-text">About</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100vh;
  .logo {
    padding: 20px;
    margin-top: 10px;
    text-align: center;
    img {
      width: 150px;
      height: 80px;
    }
  }
}
</style>
