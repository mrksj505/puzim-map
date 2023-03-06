<template>
  <div>
    <div class="color-inf" @click="infView">
      <h1>Informatyka</h1>
    </div>
    <div class="color-rol">
      <h1>Rolnictwo</h1>
    </div>
    <div class="color-eko" @click="ekoView">
      <h1>Ekonomia</h1>
    </div>
    <div class="color-mech">
      <h1>Mechanika i budowa maszyn</h1>
    </div>
    <div class="color-inz">
      <h1>Inżynieria środowiska</h1>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Baner",
  data: () => ({}),
  methods: {
    infView() {
      router.push({ name: "inf" });
    },
    ekoView() {
      router.push({ name: "eko" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-inf {
  background-color: #17122c;
  color: #8e59ff;
  border: 10px solid;
  border-color: #8e59ff;
  border-radius: 10px;
  margin-bottom: 10px;
}
.color-rol {
  background-color: #30211b;
  color: #b9765c;
  border: 10px solid;
  border-color: #b9775c;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.color-eko {
  background-color: #161a1a;
  color: #316931;
  border: 10px solid;
  border-color: #316931;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.color-mech {
  background-color: #1d1a24;
  color: #6b598f;
  border: 10px solid;
  border-color: #6b598f;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.color-inz {
  background-color: #1f171d;
  color: #7a3d38;
  border: 10px solid;
  border-color: #7a3d38;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
