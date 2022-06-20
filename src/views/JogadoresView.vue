<script>
import { v4 as uuid } from "uuid";
export default {
  novaListaLista: "",
  n_lista: "",
  data() {
    return {
      listaListas: [
        {
          id: "0cbc9fa1-914b-4c30-ac39-3678396c79da",
          name: "Lista de Lista 1",
          n_lista: 1,
          lista: 1,
        },
        {
          id: "f8b6464f-4d13-457d-bf4f-7fad84cd61e4",
          name: "Lista de Lista 2",
          n_lista: 2,
          lista: 2,
        },
        {
          id: "da71a59c-0432-40d1-9d6a-3f9416f3cc61",
          name: "Lista de Lista 3",
          n_lista: 3,
          lista: 3,
        },
        {
          id: "c5a9c485-1704-47a0-9183-f3fef961947c",
          name: "Lista de Lista 4",
          n_lista: 4,
          lista: 4,
        },
      ],
    };
  },
  methods: {
    salvar() {
      const novo_id = uuid();
      this.listaListas.push({
        id: novo_id,
        name: this.novaListaLista,
        n_lista: this.n_lista,
        lista: "WIP",
      });
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Listas</h2>
      </div>
      <div class="form-input">
        <input
          type="text"
          name=""
          id=""
          placeholder="Nome da Lista de Lista"
          v-model="novaListaLista"
        />
        <input type="text" name="" id="" placeholder="Lista" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Número da Lista da Lista"
          v-model="n_lista"
        />
        <button @click="salvar">Adicionar</button>
      </div>
      <div class="list-items">
        <table>
          <thead>
            <tr>
              <th>ID da Lista Lista</th>
              <th>Nome</th>
              <th>N° da Lista Lista</th>
              <th>ID da Lista</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lista in listaListas" :key="lista.id">
              <th>{{ lista.id }}</th>
              <th>{{ lista.name }}</th>
              <th>{{ lista.n_lista }}</th>
              <th>{{ lista.lista }}</th>

              <th><button>☠</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
