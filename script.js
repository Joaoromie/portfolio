const themeToggle = document.querySelector("#themeToggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

themeToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("modo-claro");

  if (document.documentElement.classList.contains("modo-claro")) {
    themeToggle.textContent = "☾";
    themeToggle.setAttribute("aria-label", "Ativar modo escuro");
    themeToggle.setAttribute("title", "Ativar modo escuro");
    themeToggle.setAttribute("aria-pressed", "true");
    themeColor.setAttribute("content", "#f7f3fc");
  } else {
    themeToggle.textContent = "☀";
    themeToggle.setAttribute("aria-label", "Ativar modo claro");
    themeToggle.setAttribute("title", "Ativar modo claro");
    themeToggle.setAttribute("aria-pressed", "false");
    themeColor.setAttribute("content", "#0b0816");
  }
});

const projeto1 = {
  link: "https://github.com/Joaoromie/solar-landing-page-final-main",
  file: "projeto-01.md",
  tags: ["HTML", "CSS"]
};

const projeto2 = {
  link: "https://github.com/Joaoromie/Louie",
  file: "projeto-02.md",
  tags: ["HTML", "CSS"]
};

const projeto3 = {
  link: "https://github.com/Joaoromie/Rooftop-restaurante",
  file: "projeto-03.md",
  tags: ["HTML", "CSS"]
};

const projectModal = document.querySelector("#projectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalFile = document.querySelector("#modalFile");
const modalDescription = document.querySelector("#modalDesc");
const modalImage = document.querySelector(".modal__img");
const modalTags = document.querySelector("#modalTags");
const projectLink = document.querySelector("#projectLink");
const sourceLink = document.querySelector("#sourceLink");
const closeButton = projectModal.querySelector(".modal__close");
const page = document.querySelector("main");
const navigation = document.querySelector(".navigation");
let botaoAnterior;

function abrirModal(numero, card) {
  let project;
  if (numero === 0) {
    project = projeto1;
  } else if (numero === 1) {
    project = projeto2;
  } else if (numero === 2) {
    project = projeto3;
  } else {
    return;
  }

  const titulo = card.querySelector(".project__title").textContent.trim();
  const descricao = card.querySelector(".project__description").textContent.trim();
  const imagem = card.querySelector(".project-img");

  modalTitle.textContent = titulo;
  modalFile.textContent = project.file;
  modalDescription.textContent = descricao;
  modalImage.src = imagem.src;
  modalImage.alt = "Imagem do projeto " + titulo;


  projectLink.href = project.link;
  sourceLink.href = project.link;


  modalTags.textContent = "";
  for (let i = 0; i < project.tags.length; i++) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = project.tags[i];
    modalTags.appendChild(tag);
  }

  botaoAnterior = document.activeElement;
  projectModal.classList.add("aberto");
  page.inert = true;
  navigation.inert = true;
  closeButton.focus();
}

function fecharModal() {
  projectModal.classList.remove("aberto");
  page.inert = false;
  navigation.inert = false;
  if (botaoAnterior) {
    botaoAnterior.focus();
  }
}

const cards = document.querySelectorAll(".project");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    abrirModal(Number(card.dataset.project), card);
  });
}

closeButton.addEventListener("click", fecharModal);


projectModal.addEventListener("click", function (event) {
  if (event.target === projectModal) {
    fecharModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && projectModal.classList.contains("aberto")) {
    fecharModal();
  }
});
