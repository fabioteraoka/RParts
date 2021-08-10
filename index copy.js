const express = require("express");
const { google } = require("googleapis");

const app = express();
app.set("view engine", "ejs");
app.use(express.static('./'));
// app.use(express.urlencoded({ extended: true }));

// app.get("/", async (req, res) => {
//   res.render("index");
// });

app.get("/busca", async (req, res) => {
  // const btnSearch = document.getElementById("search").value;
  // console.log(btnSearch);
  // const {
  //   FABRICANTE,
  //   MODELO_PART_NUMBER,
  //   DESCRICAO,
  //   CATEGORIA,
  //   CLASSE,
  //   TIPO_DE_SERVICO,
  //   LIMITACAO_DE_SERVICOS,
  //   DATA_DE_INCLUSAO,
  //   REVISAO_DA_INCLUSAO,
  // } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1dIiDe4BZL7p_kWRFY6RL_LCkGLHt0g11Ck2431y31bE";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRowsPn = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "PartNumber!b:i",
  });


  res.send(getRowsPn.data)

  //   .then((response) => response.json())
  //   .then((json) => {
  //     const pn = json.capacitacaoParts;
  //     console.log(pn);
  //     const result = pn.filter((i) => i.pn === btnSearch);
  //     console.log(result);
  //     const htmlList = result.map(
  //       ({ descricao, empresa, email, telefone, limitacoes }) => `
  //         <li>
  //             <div class="search-result">
  //             <h1>${descricao}</h1>
  //             <h3><strong>${empresa}</strong></h3>
  //             <p>${email}</p>
  //             <p>${telefone}</p>
  //             <p>${limitacoes}</p>  
  //             </div>
  //         </li>
  //       `
  //     );
  //     //   .join("");
  //     console.log(htmlList);
  //     document.querySelector(".container-search").innerHTML = htmlList;
  //   });
});


app.listen(8080, (req, res) => console.log("running on 8080"));
