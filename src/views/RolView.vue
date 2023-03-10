<template>
  <div>
    <ButtonBack />
    <h1 class="header">Parter 5</h1>
    <div class="img-container">
      <img
        src="../assets/pietro.png"
        style="max-width: 100%; max-height: 100%"
      />
    </div>
    <h1 class="header">I Piętro 119</h1>
    <div class="img-container">
      <img
        src="../assets/pietro.png"
        style="max-width: 100%; max-height: 100%"
      />
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
  color: #4c21a2;
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
