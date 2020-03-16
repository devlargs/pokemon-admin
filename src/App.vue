<template>
  <a-layout id="components-layout-demo-responsive">
    <Sidebar />
    <a-layout class="layout">
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  overflow: hidden;
  .layout-content {
    margin: 24px 16px 0;
  }
}
</style>

<style>
.pokemon-profile {
  background: moccasin;
  color: black;
  margin-top: 10px;
  margin-left: 5px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
}
</style>
