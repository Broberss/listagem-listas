<template>
  <footer>
    <img src="https://c.tenor.com/tlr4TFGfSL0AAAAC/bobux.gif" alt="" />
    <p class="textoFooter">Site feito por Gabrrrrrrrrrrrrrr</p>
  </footer>
</template>
<style scoped>
footer {
  background-color: darkviolet;
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

footer img {
  max-height: 90%;
  width: auto;
  filter: blur(5px);
  transition: 0.1s;
}

footer img:hover {
  filter: blur(0px);
}

footer p.textoFooter {
  margin-left: 50px;
  transition: 0.25s;
}

footer p.textoFooter:hover {
  transform: scale(2) rotate(360deg);
  color: black;
}
</style>
