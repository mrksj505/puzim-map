<template>
  <div>
    <ButtonBack />
    <h1 class="header">II Piętro 202A</h1>
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
  name: "InfView",
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
