<template>
  <div style="position: relative;">
    <img
      height="250"
      width="250"
      class="pokeball"
      alt="example"
      :src="getUrl"
    />
  </div>
</template>

<script>
import config from "@/utils/config";
import helpers from "@/utils/helpers";

export default {
  props: ["id"],
  computed: {
    getUrl: function() {
      return `${config.imgUrl}${helpers.getStringifiedInt(this.$props.id)}.png`;
    }
  }
};
</script>

<style scoped lang="scss">
.pokeball {
  background: -webkit-linear-gradient(90deg, #fff 50%, rgba(0, 0, 0, 0) 50%),
    -webkit-linear-gradient(90deg, black 54%, red 51%);
  text-align: center !important;
  border-radius: 50%;
  border: 10px solid black;
}
</style>
