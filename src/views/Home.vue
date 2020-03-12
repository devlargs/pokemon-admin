<template>
  <div>
    <h1>home</h1>
  </div>
</template>

<script>
import api from "@/utils/api";
export default {
  created() {
    console.log("created");
    // api.getPokemonList();
    // console.log(api.getPokemonList);
    api.getPokemonsList();
  }
};
</script>
