<template>
  <div>
    <b>{{ label.split("-").join(" ") | capitalize }}</b>
    <a-progress :percent="percent" :format="format" />
  </div>
</template>

<script>
export default {
  props: ["percent", "label"],
  methods: {
    format: e => e
  }
};
</script>
