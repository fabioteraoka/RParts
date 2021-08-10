const express = require("express");
const credentials = require('./credentials.json')
const { GoogleSpreadsheet } = require('google-spreadsheet');

const app = express();
app.set("view engine", "ejs");
app.use(express.static('./'));

// app.get("/busca", async (req, res) => {


//   const auth = new google.auth.GoogleAuth({
//     keyFile: "credentials.json",æ
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   // Create client instance for auth
//   const client = await auth.getClient();

//   // Instance of Google Sheets API
//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = "1dIiDe4BZL7p_kWRFY6RL_LCkGLHt0g11Ck2431y31bE";

//   // Get metadata about spreadsheet
//   const metaData = await googleSheets.spreadsheets.get({
//     auth,
//     spreadsheetId,
//   });

//   // Read rows from spreadsheet
//   const getRowsPn = await googleSheets.spreadsheets.values.get({
//     auth,
//     spreadsheetId,
//     range: "PartNumber!b:i",
//   });


//   res.send(getRowsPn.data)

// });

app.get("/dev", async (req, res) => {

  // Initialize the sheet - doc ID is the long id in the sheets URL
  // const doc = new GoogleSpreadsheet('<the sheet ID from the url>');
  const spreadsheetId = new GoogleSpreadsheet("1dIiDe4BZL7p_kWRFY6RL_LCkGLHt0g11Ck2431y31bE");

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await spreadsheetId.useServiceAccountAuth({
  client_email: credentials.client_email,
  private_key: credentials.private_key,
});
  await spreadsheetId.loadInfo(); // loads document properties and worksheets
  console.log(spreadsheetId.title);

  const sheet = spreadsheetId.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  const rows =  await sheet.getRows()
  console.log(rows);
  const pns = rows.map(({ 
    FABRICANTE,
    MODELO_PART_NUMBER,
    DESCRICAO,
    CATEGORIA,
    CLASSE,
    TIPO_DE_SERVICO,
    LIMITACAO_DE_SERVICOS,
    DATA_DE_INCLUSAO,
    REVISAO_DA_INCLUSAO
  }) => {
    return {
      FABRICANTE,
      MODELO_PART_NUMBER,
      DESCRICAO,
      CATEGORIA,
      CLASSE,
      TIPO_DE_SERVICO,
      LIMITACAO_DE_SERVICOS,
      DATA_DE_INCLUSAO,
      REVISAO_DA_INCLUSAO
    }
  })
  // read rows
  // const rows = await sheet.getRows()
  res.send(pns)
})


app.listen(8080, (req, res) => console.log("running on 8080"));
