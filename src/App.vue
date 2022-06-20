<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;

  font-weight: normal;
}

/* h1 {
  transition: 0.25s;
  width: fit-content;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

h1:hover {
  transform: matrix(1000, 70, 60, 50, 40, 30);
  color: black;
} */

main {
  height: 70%;
}
</style>
