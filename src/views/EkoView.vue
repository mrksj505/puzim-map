<template>
  <div>
    <ButtonBack />
    <h1 class="header">Parter: sala 29</h1>
    <div class="img-container">
      <img src="../assets/eko1.png" style="max-width: 100%; max-height: 100%" />
    </div>
    <h1 class="header">I Piętro: sala 126</h1>
    <div class="img-container">
      <img src="../assets/eko2.png" style="max-width: 100%; max-height: 100%" />
    </div>
  </div>
</template>

<script>
import ButtonBack from "../components/ButtonBack.vue";
export default {
  name: "EkoView",
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
