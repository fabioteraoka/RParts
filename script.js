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
function inicia(){
  const inicial = `
        <div class="inicial">
        <h1>Como Funciona?</h1>
        <img src="./images/connecting.svg" alt="">
        <p>A <strong>RepairParts</strong> É UMA PLATAFORMA DE  PESQUISA POR OFICINAS REPARADORAS, CERTIFICADAS PELA ANAC, PARA REPAROS OU REVISÃO GERAL DE COMPONENTES. 
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
                  <p>A RepairParts é uma empresa dedicada a facilitar a vida dos operadores da aviação, conectando operadores e oficinas nacionais certificadas, com segurança, eficiência, rapidez e redução de custos. Acreditamos na capacidade dos profissionais brasileiros e no desenvolvimento da Indústria nacional.   </p>
              </div>`
              document.querySelector(".container.search").innerHTML = about;
}

//função funcionamento
function funcionamento(){
  const funcionamento = `
  <div class="funcinamento">
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
          <p>Você tem a possibilidade de encontrar várias oficinas que podem lhe ajudar. Seja para um pequeno reparo ou para uma revisão geral, somente oficinas homologadas e com certificação ativa.</p>
          <p>Caso não encontre uma oficina para o seu serviço, você pode abrir uma solicitação para o seu componente. Depois de aberta essa requisição, enviaremos um email para todas as oficinas registradas, Por similaridade, algumas delas poderão se capacitar para atendê-lo.</p>  
          <p>Negocie diretamente com a empresa os detalhes do serviço, dados, envio, coleta, valores e forma de pagamento.</p>
          <p>Não interagimos na negociação ou em qualquer fase do processo, apenas intermediamos o contato entre operadores e executores certificados.</p>
      </div>
  </div>
  </div>`
              document.querySelector(".container.search").innerHTML = funcionamento;
}