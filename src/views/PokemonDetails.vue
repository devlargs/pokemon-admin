<template>
  <Content title="Bulbasaur #001">
    <div :style="{ textAlign: 'left' }">
      <a-breadcrumb>
        <a-breadcrumb-item>Pokemons</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Bulbasaur</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <a-row :gutter="16" style="margin-top: 50px">
      <a-col :span="12" style="text-align: center;">
        <Pokeball
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
        />
      </a-col>
      <a-col :span="12" style="text-align: left">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="Profile" key="1">
            <Types v-show="pokemon.types.length" :type="pokemon.types" />
            <div class="pokemon-profile">
              <div
                v-for="(stats, key) in pokemon.stats"
                v-bind:key="key"
                v-show="pokemon.stats.length"
              >
                <Statistics
                  v-show="stats.stat.name !== 'attack'"
                  :label="stats.stat.name"
                  :percent="stats.base_stat"
                />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="Moves" key="2" forceRender
            >Content of Tab Pane 2</a-tab-pane
          >
          <a-tab-pane tab="Abilities" key="3">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </Content>
</template>

<script>
import api from "@/utils/api";
export default {
  data() {
    return {
      pokemon: {
        types: []
      },
      loading: false
    };
  },
  async created() {
    this.fetch();
  },
  methods: {
    format: e => e,
    async fetch() {
      this.loading = true;
      const { status, result, error } = await api.getPokemonDetail(
        this.$route.params.id
      );
      if (status) {
        this.pokemon = result;
      } else {
        this.error = error;
      }
      this.loading = false;
    }
  }
};
</script>
