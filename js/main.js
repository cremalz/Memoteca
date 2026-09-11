import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const formularioPensamento = document.getElementById("pensamento-form");

  if (formularioPensamento) {
    formularioPensamento.addEventListener(
      "submit",
      manipularSubmissaoFormulario,
    );
  }

  ui.renderizarPensamentos();
});

async function manipularSubmissaoFormulario(evento) {
  evento.preventDefault();

  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.salvarPensamentos({ conteudo, autoria });
    ui.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}
