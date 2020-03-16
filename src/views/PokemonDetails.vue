<template>
  <Content title="Bulbasaur #001">
    <div :style="{ textAlign: 'left' }">
      <a-breadcrumb>
        <a-breadcrumb-item>Pokemons</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Bulbasaur</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div style="position: relative;">
      <img
        height="250"
        width="250"
        class="pokeball"
        alt="example"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
      />
    </div>

    <div :style="{ textAlign: 'left' }">
      <a-tabs defaultActiveKey="1">
        <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane tab="Tab 2" key="2" forceRender
          >Content of Tab Pane 2</a-tab-pane
        >
        <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </Content>
</template>

<script>
import api from "@/utils/api";
export default {
  data() {
    return {
      pokemon: {},
      loading: false
    };
  },
  created() {
    this.fetch();
  },
  methods: {
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

<style scoped lang="scss">
.pokeball {
  background: -webkit-linear-gradient(90deg, #fff 50%, rgba(0, 0, 0, 0) 44%),
    -webkit-linear-gradient(90deg, black 55%, red 55%);
  text-align: center !important;
  border-radius: 50%;
  border: 10px solid black;
}
</style>
