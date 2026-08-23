import api from "./api.js";

const ui = {
  async renderPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach((pensamento) => {
        listaPensamentos.innerHTML += `
 <li class="li-pensamento" data-id="${pensamento.id}">
 <img src="assets/imagens/aspas-azuis.png" alt="Aspas Azuis" class="icone-aspas">
 <div class="pensamento-conteudo">${pensamento.conteudo}</div>    
 <div class="pensamento-autoria">${pensamento.autor}</div>      
 </li>
 `;
      });
    } catch {
      alert("Erro ao buscar pensamentos.");
    }
  },
};

ui.renderPensamentos();

export default ui;
