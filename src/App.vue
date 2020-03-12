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
