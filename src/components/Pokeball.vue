<template>
  <div style="position: relative;">
    <img height="250" width="250" class="pokeball" alt="example" :src="image" />
  </div>
</template>

<script>
export default {
  props: ["image"]
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
