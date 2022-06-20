<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span><RouterLink to="/" class="botão"> Home </RouterLink></span>
      <span> | </span>
      <span>
        <RouterLink to="/listas" class="botão"> Listas </RouterLink>
      </span>
      <span> | </span>
      <span>
        <RouterLink to="/listaListas" class="botão">
          Listas de Listas Listas
        </RouterLink>
      </span>
    </div>
    <div class="menu-direito">
      <span>
        <RouterLink to="/" class="botão"> Sair </RouterLink>
      </span>
    </div>
  </header>
</template>

<style>
header.menu-superior {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header {
  background-color: darkviolet;
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

header span {
  padding: 0% 20px;
  font-weight: bold;
}

a.botão {
  text-decoration: none;
  color: white;
  display: inline-block;
  font-weight: bold;
  transition: 0.25s;
}

a.botão:hover {
  transform: scale(1.5) rotate(5deg);
}
</style>
