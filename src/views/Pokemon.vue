<template>
  <div :style="{ padding: '24px', background: '#fff' }">
    <h1>Pokemons</h1>
    <div class="pokemon-container">
      <div style="pokemon-results">
        <a-spin :spinning="loading">
          <a-row :gutter="16">
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
        </a-spin>
      </div>
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
      pokemons: []
    };
  },
  async created() {
    const { status, data } = await api.getPokemonsList(this.limit, this.offset);
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
    }
  }
};
</script>

<style scoped lang="scss">
.pokemon-container {
  height: calc(100vh - 200px);
  overflow: auto;
  overflow-x: hidden;

  .pokemon-card {
    margin-bottom: 20px;
  }
}
</style>
