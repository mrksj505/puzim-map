<template>
  <button class="button-start" @click="goStart">➡️Przejdź</button>
</template>

<script>
import router from "../router";

export default {
  name: "Baner",
  data: () => ({}),
  methods: {
    goStart() {
      router.push({ name: "MainScreen" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-start {
  font-size: 30px;
  color: white;
  background-color: #14111a;
  border: none;
}
</style>
