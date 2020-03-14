<template>
  <a-row :gutter="16">
    <a-col
      class="card-container"
      v-for="(data, idx) in dataSource"
      :xxl="4"
      :lg="6"
      :md="8"
      :sm="12"
      :xs="24"
      :key="idx"
    >
      <router-link :to="`/${link}/${data.id}`">
        <a-card hoverable class="card">
          <img
            :alt="data.url"
            slot="cover"
            height="150"
            :src="data.image"
            @error="getAlternateImg"
          />
          <a-card-meta
            class="card-meta"
            :title="data.name | capitalize"
            :style="{ textAlign: 'center' }"
          ></a-card-meta>
        </a-card>
      </router-link>
    </a-col>
  </a-row>
</template>

<script>
import config from "@/utils/config";

export default {
  props: ["dataSource", "link"],
  data() {
    return {
      rowPush: 0
    };
  },
  methods: {
    getAlternateImg(e) {
      e.target.src = config.defaultPokemonImg;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-bottom: 20px;
  .card:hover {
    border: 1px solid #385aa7;
    border-radius: 20px;
  }
}
</style>
