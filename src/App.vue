<template>
  <a-layout id="components-layout-demo-responsive">
    <Sidebar />
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff' }">
          <router-view />
        </div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>
