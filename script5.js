// async function Cam4() {
//     // await fetch('http://localhost:3000/Cam4')
//     try{
//       const response = await fetch('/Cam4')
//       const data = await response.json()
//       document.querySelector('.container').innerHTML = data
//     } catch(error){
//       console.log(error)
//     }
//  }



async function busca() {
    // const btnSearch = document.getElementById("search").value;
    // console.log(btnSearch);
        const response = await fetch('http://localhost:8080/',{mode: 'no-cors'})
        const parts = await response.json()
        console.log(parts);
    //   .then((response) => response.json())
    //   .then((json) => {
        // const pn = json.capacitacaoParts;
        // console.log(json);
        // const result = pn.filter((i) => i.pn === btnSearch);
        // console.log(result);
        // const htmlList = result
        //   .map(({ descricao, empresa, email, telefone, limitacoes}) => `
        //     <li>
        //         <div class="search-result">
        //         <h1>${descricao}</h1>
        //         <h3><strong>${empresa}</strong></h3>
        //         <p>${email}</p>
        //         <p>${telefone}</p>
        //         <p>${limitacoes}</p>  
        //         </div>
        //     </li>
        //   `)
        // //   .join("");
        // console.log(htmlList);
        // document.querySelector(".container-search").innerHTML = htmlList;
      };
  