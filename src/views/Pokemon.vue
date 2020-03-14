<template>
  <div :style="{ padding: '24px', background: '#fff' }">
    <h1>Pokemons</h1>
    <div
      class="pokemon-container"
      id="pokemon-container"
      v-on:scroll="onScroll"
    >
      <a-spin :spinning="loading" v-show="pokemons.length">
        <PokeRowCol :dataSource="pokemons" />
      </a-spin>
      <a-spin :spinning="loading"></a-spin>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import config from "@/utils/config";
import { compact, uniqBy } from "lodash";

export default {
  data() {
    return {
      limit: 49,
      loading: true,
      offset: 1,
      pokemons: [],
      count: 0
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.loading = true;
      setTimeout(async () => {
        const { status, data } = await api.getPokemonsList(
          this.limit,
          this.offset
        );
        if (status) {
          const list = data.results.map(q => {
            let idx = `${compact(q.url.split("/")).pop()}`;
            if (idx.length === 1) {
              idx = `00${idx}`;
            } else if (idx.length === 2) {
              idx = `0${idx}`;
            }
            return {
              ...q,
              image: `${config.imgUrl}${idx}.png`
            };
          });
          this.pokemons = uniqBy([...this.pokemons, ...list], "name");
          this.loading = false;
          this.count = data.count;
          this.offset = this.offset + this.limit;
        }
      }, 2000);
    },
    onScroll() {
      const element = document.getElementById("pokemon-container");
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        this.fetch();
      }
    }
  }
};
</script>

<style scoped lang="scss">
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
