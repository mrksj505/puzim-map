<template>
  <div>
    <ButtonBack />
    <h1 class="header">Parter: sala 5</h1>
    <div class="img-container">
      <img src="../assets/rol1.png" style="max-width: 100%; max-height: 100%" />
    </div>
    <h1 class="header">I Piętro: sala 119</h1>
    <div class="img-container">
      <img src="../assets/rol2.png" style="max-width: 100%; max-height: 100%" />
    </div>
  </div>
</template>
<script>
import ButtonBack from "../components/ButtonBack.vue";
export default {
  name: "RolView",
  components: { ButtonBack },
};
</script>
<style>
.header {
  color: white;
}
.img-container {
  margin: auto;
  width: 70%;
  height: 70%;
}
p {
  color: white;
}
</style>
