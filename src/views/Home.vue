<template>
  <div>
    <h1>Pokemon</h1>
  </div>
</template>

<script>
import api from "@/utils/api";
export default {
  created() {
    api.getPokemonsList();
  }
};
</script>
