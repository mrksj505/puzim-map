<template>
  <div>
    <div class="img-container">
      <img
        src="../assets/puzim.png"
        style="max-width: 100%; max-height: 100%"
      />
    </div>
    <h1 style="color: white; text-shadow: 2px 2px black">
      Dzień Otwarty Wydziału Inżynierii i Ekonomii
    </h1>
    <h1 style="color: white; text-shadow: 1px 1px black">29 marca 2023r.</h1>
    <ButtonStart />
  </div>
</template>
<script>
import ButtonStart from "../components/ButtonStart.vue";
export default {
  name: "StartView",
  components: { ButtonStart },
};
</script>
<style scoped>
.img-container {
  margin: auto;
  border: 3px solid white;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
</style>
