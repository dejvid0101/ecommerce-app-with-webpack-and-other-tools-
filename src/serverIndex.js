//initialises express server which has database api functionality only
const Express = require('express')
const Cors=require('cors')
// for running app on express server instead of client (webpack)
// const path = require('path')
const app = Express()
const port = 3001
const sql = require('mssql')

//enable CORS requests
app.use(Cors())

// for running app on express server instead of client (webpack)
/* const DIST_DIR=path.join(__dirname, '../dist');
const HTML_FILE=path.join(DIST_DIR, '/index.html') */

async function fetchData() {
    try {
        await sql.connect('Server=localhost;Database=RWAApartmani;User Id=sa;Password=SQL;Encrypt=false');
        const result = await sql.query`select*from Apartment`;
        return result;
    } catch (err) {
        return err;
    }
}

// for running app on express server instead of client (webpack)
// app.use(Express.static(DIST_DIR));

// for running app on express server instead of client (webpack)
/* app.get('/:n', (req, res) => {
    res.sendFile(HTML_FILE);
  }) */

  app.get('/api/getAll', (req, res) => {

const dataPromise=fetchData()
.then((promiseRes)=>res.send(JSON.stringify(promiseRes)));

  })
  
  app.listen(port, () => {
    
  })