<template>
  <div class="parent">
    <h1>{{ title }}</h1>
    <div class="pokemon-container" id="pokemon-container" v-on:scroll="scroll">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["onScroll", "title"],
  methods: {
    scroll() {
      const element = document.getElementById("pokemon-container");
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        this.onScroll();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.parent {
  padding: 24px;
  background: #fff;
}
.pokemon-container {
  height: calc(100vh - 200px);
  overflow: auto;
  text-align: center;
  overflow-x: hidden;
  z-index: 9999;
}

.pokemon-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border-radius: 10px;
}

.pokemon-container::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.pokemon-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    30% 0%,
    75% 84%,
    from(#3556a1),
    to(#f9cc02),
    color-stop(0.6, #3556a1)
  );
}
</style>
