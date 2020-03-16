<template>
  <Content :onScroll="fetch" title="Pokemons">
    <a-spin :spinning="loading" v-show="pokemons.length">
      <PokeRowCol :dataSource="pokemons" link="pokemon" />
    </a-spin>
    <a-spin :spinning="loading"></a-spin>
  </Content>
</template>

<script>
import api from "@/utils/api";
import config from "@/utils/config";
import helpers from "@/utils/helpers";
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
            const id = `${compact(q.url.split("/")).pop()}`;
            return {
              ...q,
              id,
              image: `${config.imgUrl}${helpers.getStringifiedInt(id)}.png`
            };
          });
          this.pokemons = uniqBy([...this.pokemons, ...list], "name");
          this.loading = false;
          this.count = data.count;
          this.offset = this.offset + this.limit;
        }
      }, 2000);
    }
  }
};
</script>
