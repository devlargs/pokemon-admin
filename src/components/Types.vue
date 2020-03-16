<template>
  <div class="pokemon-profile">
    <b>Types</b>&nbsp;
    <a-tag
      v-for="({ type }, key) in types"
      :color="colors[type.name]"
      v-bind:key="key"
      >{{ type.name | capitalize }}</a-tag
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        bug: "#A8B820",
        electric: "#DAB600",
        dark: "#000",
        dragon: "#201A0C",
        fairy: "#E97979",
        fighting: "#7D0600",
        fire: "#F81700",
        flying: "#A87ED6",
        grass: "#1E5631",
        ghost: "#705898",
        ground: "#3E1C00",
        ice: "#1E6C86",
        normal: "#464646",
        poison: "#350060",
        psychic: "#F81462",
        rock: "#8F8A86",
        shadow: "",
        steel: "#767676",
        water: "#3901F8",
        unknown: ""
      }
    };
  },
  props: ["type"],
  computed: {
    types: function() {
      return this.$props.type;
    }
  }
};
</script>
