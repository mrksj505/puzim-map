<template>
  <div>
    <ButtonBack />
    <h1 class="header">II Piętro: sala 202A</h1>
    <div class="img-container">
      <img src="../assets/inf.png" style="max-width: 100%; max-height: 100%" />
    </div>
  </div>
</template>
<script>
import ButtonBack from "../components/ButtonBack.vue";
export default {
  name: "InfView",
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
