/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


//função busca part number
function busca() {
  const btnSearch = document.getElementById("search").value;
  console.log(btnSearch);
  let url =
    "https://api.sheety.co/17cc63aacdf00d54d806c20f10ba052a/analise/capacitacaoParts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const pn = json.capacitacaoParts;
      console.log(pn);
      const result = pn.filter((i) => i.pn === btnSearch);
      console.log(result);
      const htmlList = result
        .map(({ descricao, empresa, email, telefone, limitacoes}) => `
          <li>
              <div class="search-result">
              <h1>${descricao}</h1>
              <h3><strong>${empresa}</strong></h3>
              <p>${email}</p>
              <p>${telefone}</p>
              <p>${limitacoes}</p>  
              </div>
          </li>
        `)
      //   .join("");
      console.log(htmlList);
      document.querySelector(".container.search").innerHTML = htmlList;
    });
}

//função inicio
function inicial(){
  const inicial = `
        <div class="inicial">
        <h1>Como Funciona?</h1>
        <img src="./images/connecting.svg" alt="">
        <p>A <strong>Aviation Services</strong> É UMA PLATAFORMA DE  PESQUISA POR OFICINAS REPARADORAS, CERTIFICADAS PELA ANAC, PARA REPAROS OU REVISÃO GERAL DE COMPONENTES. 
                      CONECTAMOS VOCÊ A QUEM FAZ.</p>
        </div> `;
        document.querySelector(".container.search").innerHTML = inicial;
      }

//função about
function about(){
  const about = `
          <div class="inicial">
                  <h1>Quem somos</h1>
                  <img src="./images/profile.svg" alt="">
                  <p>A Aviation Services é uma empresa dedicada a facilitar a vida dos operadores da aviação, conectando operadores e oficinas nacionais certificadas, com segurança, eficiência, rapidez e redução de custos. Acreditamos na capacidade dos profissionais brasileiros e no desenvolvimento da Indústria nacional.   </p>
              </div>`
              document.querySelector(".container.search").innerHTML = about;
}

//função funcionamento
function funcionamento(){
  const funcionamento = `
  <div class="funcionamento">
  <div class="funcionamento-title">
      <h1>Como Funciona a Lista de Capacidade</h1>
  </div>
  <div class="funcionamento-box">
      <div class="inicial box">
          <h1>Ofereça seus serviços</h1>
          <p>Sua oficina é Homologada?</p>
          <p>Cadastre-se no nosso site para que seus serviços possam ser encontrados por todos os operadores.</p>
          <p>Ao registrar sua empresa, ela será exibida para todos que procuram por um serviço em nosso site.Você pode definir livremente o valor a ser cobrado.</p>
          <p>Os usuários ou empresas interessadas podem entrar em contato direto, e você pode discutir livremente os detalhes do serviço, como dados, envio e coleta de material, valores e forma de pagamento.</p>  
          <p>A RepairParts não interage na negociação, ela é entre você e o operador, apenas intermediamos os contatos.</p>
          </div>
      <div class="inicial box">
          <h1>Esta procurando ajuda?</h1>
          <p>Procure serviços para seu componente, seja reparo ou revisão geral.</p>
          <p>Você tem a possibilidade de encontrar várias oficinas que podem lhe ajudar. Seja para um pequeno reparo ou para uma revisão geral, somente oficinas homologadas e com certificação ativa.</p>
          <p>Caso não encontre uma oficina para o seu serviço, você pode abrir uma solicitação para o seu componente. Depois de aberta essa requisição, enviaremos um email para todas as oficinas registradas, Por similaridade, algumas delas poderão se capacitar para atendê-lo.</p>  
          <p>Negocie diretamente com a empresa os detalhes do serviço, dados, envio, coleta, valores e forma de pagamento.</p>
          <p>Não interagimos na negociação ou em qualquer fase do processo, apenas intermediamos o contato entre operadores e executores certificados.</p>
      </div>
  </div>
  </div>`
              document.querySelector(".container.search").innerHTML = funcionamento;
}

// menu side bar
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
  // console.log(sidebar.classList)
  // if(sidebar.classList.contains('show-sidebar')){
  //     sidebar.classList.remove('show-sidebar')
  // } else{
  //     sidebar.classList.add('show-sidebar')
  // }
  sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar')
})