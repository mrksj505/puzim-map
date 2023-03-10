<template>
  <button class="button-back" @click="goBack">⬅️Powrót</button>
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
<style scoped>
.button-back {
  font-size: 30px;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  background-color: #14111a;
  border: none;
}
</style>
