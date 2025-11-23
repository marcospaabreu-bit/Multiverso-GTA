// script.js
const cardsContainer = document.querySelector("#cards-container");
let dados = []; // Armazena os dados carregados do JSON

// Carrega os dados do JSON
async function carregarDados() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    dados = await response.json(); // Atribui os dados à variável global
    renderizarCards(dados); // Renderiza todos os cards inicialmente
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
    cardsContainer.innerHTML = "<p>Não foi possível carregar os dados dos jogos.</p>";
  }
}

// Renderiza os cards na tela
function renderizarCards(dadosParaRenderizar) {
  cardsContainer.innerHTML = ""; // Limpa o container antes de renderizar
  if (dadosParaRenderizar.length === 0) {
    cardsContainer.innerHTML = "<p>Nenhum jogo encontrado com este critério.</p>";
    return;
  }

  dadosParaRenderizar.forEach((dado) => {
    const card = document.createElement("article");
    card.classList.add("card");

    // Adiciona a imagem da capa
    if (dado.imagemCapa) {
      const capaImg = document.createElement("img");
      capaImg.src = dado.imagemCapa;
      capaImg.alt = `Capa do jogo ${dado.nome}`;
      capaImg.classList.add("card-capa");
      card.appendChild(capaImg);
    }

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const nome = document.createElement("h2");
    nome.textContent = dado.nome;
    cardContent.appendChild(nome);

    const ano = document.createElement("p");
    ano.textContent = `Ano: ${dado.ano}`;
    cardContent.appendChild(ano);

    const descricao = document.createElement("p");
    descricao.textContent = dado.descricao;
    cardContent.appendChild(descricao);

    const link = document.createElement("a");
    link.href = dado.link;
    link.textContent = "Saiba Mais";
    link.target = "_blank"; // Abre em nova aba
    link.classList.add("card-link");
    cardContent.appendChild(link);

    card.appendChild(cardContent); // Adiciona o conteúdo à direita da capa
    cardsContainer.appendChild(card);
  });
}

// Esta função é chamada quando o botão "Buscar" é clicado ou Enter é pressionado
function iniciarBusca() {
  const searchInput = document.querySelector("#search-input");
  const termoBusca = searchInput.value.toLowerCase();

  const dadosFiltrados = dados.filter((dado) => {
    const anoString = dado.ano.toString();
    return (
      dado.nome.toLowerCase().includes(termoBusca) ||
      dado.descricao.toLowerCase().includes(termoBusca) ||
      anoString.includes(termoBusca)
    );
  });

  renderizarCards(dadosFiltrados);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", carregarDados);

document.querySelector("#search-button").addEventListener("click", iniciarBusca);

document.querySelector("#search-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    iniciarBusca();
  }
});