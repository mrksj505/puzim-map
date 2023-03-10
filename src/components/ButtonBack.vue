<template>
  <button @click="goBack">⬅️</button>
</template>

<script>
import router from "../router";

export default {
  name: "Baner",
  data: () => ({}),
  methods: {
    goBack() {
      router.push({ name: "Home" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
