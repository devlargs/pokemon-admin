<template>
  <a-layout id="components-layout-demo-responsive">
    <Sidebar />
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <!-- <div>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-view />
  </div> -->
</template>

<style lang="scss"></style>
