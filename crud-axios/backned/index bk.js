const express = require('express');
const app = express();
const port = 3000;

let mahasiswa = ["Irtiyaah", "Daffa", "Yulita", "Andra"]
let objectMahasiswa = [
    
    {nim :242424, nama:"Daffa Uswatul Hasanah"},
    {nim :242425, nama:"Ribatul Maulana Malik"},
    {nim :242426, nama:"Zaski Prasetyo Nigrum"},
    {nim :242427, nama:"Irtiyaah Nailah Zaky Amany"}
]


const getObjectMahasiswa = (req, res) => {
  let {nama} = req.query
  let result = ""


  if(nama == undefined){
    nama = ""
  }

  console.log(nama)
  objectMahasiswa.forEach((item,index) => {
    if(item.nama.toLowerCase().includes(nama)) {
    result += `<H1>${index + 1}.<br>NIM : ${item.nim}<br>NAMA : ${item.nama}</H1><br>`
    }
  })
  if (result === "") {
    res.send(`<H1>Data tidak ditemukan.</H1>`)
  } 
    res.send(result);
}
  

const getObjectMahasiswabyNim = (req, res) => {
  let {nama} = req.params;
  let hasil = objectMahasiswa.find((item) => {
    return item.nim === Number(nim)
  })

res.send(`${hasil.nama}`)
}


const getMahasiswa = (req, res) => {
  let result = ""

  mahasiswa.forEach(function(item, index){
    result += `<br>${index + 1}. ${item}</br>`
  })

  res.send(result);
}

app.get('/', (req, res) => {
  res.send('Hello, nama saya irtiyaah');
});


app.get('/mahasiswa', getMahasiswa);
app.get('/objectmahasiswa', getObjectMahasiswa);
app.get('/objectmahasiswa/:nim', getObjectMahasiswabyNim);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});