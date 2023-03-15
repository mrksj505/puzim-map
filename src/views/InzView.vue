<template>
  <div>
    <ButtonBack />
    <h1 class="header">Parter: sale 25A, 2</h1>
    <div class="img-container">
      <img src="../assets/inz.png" style="max-width: 100%; max-height: 100%" />
    </div>
  </div>
</template>
<script>
import ButtonBack from "../components/ButtonBack.vue";
export default {
  name: "InzView",
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
