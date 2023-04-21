//initialises express server which has database api functionality 
const Express = require('express')
const Cors = require('cors')
// for running app on express server instead of client (webpack)
// const path = require('path')
const app = Express()
const port = 3001
const sql = require('mssql')


/* 
interface DbRepo{
  fetchItems:()=>Promise<any>,
  fetchTags:()=>Promise<any>
    } */

//enable CORS requests
app.use(Cors())

// for running app on express server instead of client (webpack)
/* const DIST_DIR=path.join(__dirname, '../dist');
const HTML_FILE=path.join(DIST_DIR, '/index.html') *

// for running app on express server instead of client (webpack)
// app.use(Express.static(DIST_DIR));

// for running app on express server instead of client (webpack)
/* app.get('/:n', (req, res) => {
    res.sendFile(HTML_FILE);
  }) */

app.get('/api/getAll', (req, res) => {

  fetchItems()
    .then((promiseRes) => res.send(JSON.stringify(promiseRes)));

})

app.get('/api/getTags', (req, res) => {

  fetchTags()
    .then((promiseRes) => res.send(JSON.stringify(promiseRes)));

})

//fetch data from TaggedApt db table which acts as middleware between Apt and Tag tables
app.get('/api/getTagAptCons', (req, res) => {

  fetchTagAptCons()
    .then((promiseRes) => res.send(JSON.stringify(promiseRes)));

})

app.get('/api/getImg/:AptId', (req, res) => {

  //return images for apt
  console.log(`select*from ApartmentPicture where ApartmentId=${req.params.AptId.toString()}`);

  fetchAptImg(req.params.AptId.toString())
    .then((promiseRes) => res.send(JSON.stringify(promiseRes)));


})

app.listen(port, () => {

})

const fetchItems = async () => {
  try {
    await sql.connect('Server=localhost;Database=RWAApartmani;User Id=sa;Password=SQL;Encrypt=false');
    const result = await sql.query`select*from Apartment`;
    return result;
  } catch (err) {
    return err;
  }
}

const fetchTags = async () => {
  try {
    await sql.connect('Server=localhost;Database=RWAApartmani;User Id=sa;Password=SQL;Encrypt=false');
    const result = await sql.query`select*from Tag`;
    return result;
  } catch (err) {
    return err;
  }
}

const fetchTagAptCons = async () => {
  try {
    await sql.connect('Server=localhost;Database=RWAApartmani;User Id=sa;Password=SQL;Encrypt=false');
    const result = await sql.query`select*from TaggedApartment`;
    return result;
  } catch (err) {
    return err;
  }
}

const fetchAptImg = async (id) => {
  try {
    await sql.connect('Server=localhost;Database=RWAApartmani;User Id=sa;Password=SQL;Encrypt=false');
    const result = await sql.query`select*from ApartmentPicture where ApartmentId=${id}`;
    return result;
  } catch (err) {
    return err;
  }
}