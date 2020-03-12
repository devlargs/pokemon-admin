<template>
  <div :style="{ padding: '24px', background: '#fff' }">
    <h1>
      Pokemons
      <span class="subtitle"
        >(showing {{ pokemons.length }} of {{ count }})</span
      >
    </h1>
    <div class="pokemon-container">
      <a-spin :spinning="loading" v-show="!pokemons.length" size="large" />
      <a-row :gutter="16" v-show="pokemons.length">
        <a-col
          class="pokemon-card"
          v-for="(pokemon, idx) in pokemons"
          :span="6"
          :key="idx"
        >
          <div class="gutter-box">
            <a-card hoverable style="width: 240px">
              <img
                alt="example"
                :src="pokemon.image"
                slot="cover"
                height="150"
              />
              <a-card-meta
                :title="pokemon.name | capitalize"
                :style="{ textAlign: 'center' }"
              >
              </a-card-meta>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import config from "@/utils/config";
import { compact } from "lodash";

export default {
  data() {
    return {
      limit: 100,
      loading: true,
      offset: 0,
      pokemons: [],
      count: 0
    };
  },
  async created() {
    setTimeout(async () => {
      const { status, data } = await api.getPokemonsList(
        this.limit,
        this.offset
      );
      if (status) {
        this.pokemons = data.results.map(q => {
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
        this.loading = false;
        this.count = data.count;
      }
    }, 1000);
  }
};
</script>

<style scoped lang="scss">
.subtitle {
  float: right;
}
.pokemon-container {
  height: calc(100vh - 200px);
  overflow: auto;
  text-align: center;
  overflow-x: hidden;
  .pokemon-card {
    margin-bottom: 20px;
  }
}

.pokemon-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border-radius: 10px;
}

.pokemon-container::-webkit-scrollbar {
  width: 10px;
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
