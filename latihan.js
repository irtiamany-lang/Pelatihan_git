console.log("Hello Word")

var nama ="Irtiyaah"
var NomorUrut = 12

console.log("nama")
console.log(nama)
console.log(NomorUrut)

var open = true
if(open == true){
    console.log ("BUKA")

}


// operasi aritmatika
var a = 5
var b = 5
var tambah = a + b
var kurang = a - b
var kali = a * b
var bagi = a / b
var modulus = a % b

console.log("Hasil tambah =",  a + b)
console.log("Hasil kurang =", a - b)
console.log("Hasil kali =", a * b)
console.log("Hasil bagi =", a / b)
console.log("Hasil modulus =", a % b)

// Operator Perbandingan
console.log("Operator Perbandingan")
console.log("====================")

console.log(1 != 1)
console.log(1 == "1")
console.log(1 === "1")
console.log(1 == 1)
console.log(1 === 1)
console.log("1" == "1")
console.log("1" === "1")
console.log(1 > 2)
console.log(1 < 2)
console.log(1 <= 1)
console.log(1 >= 1)
console.log(2 <= 4)
console.log(5 >= 1)

console.log("==========================")
//Operator Kondisional ()
// &&(and) ||(or)
console.log("Operator Kondisional")
console.log(false || false)
console.log(false && true)

var status = "close"
var jamBuka = 9
console.log(status = "open" || jamBuka >= 9)

var status = "open"
var jamBuka = 9
console.log(status = "open" && jamBuka <= 8)
console.log("==========================")


console.log("==========================")
//Operator String
var word = "Web Progamming"
var word1= "web"
var word2 = "Progamming"
console.log(word1, word2, 'tahun 2026')

var word = "Web Progamming"
console.log(word.length)

var word = "Web Progamming"
console.log(word.charAt(1)) 


var car1 ='Daffa BLK';
var car2 = car1.substring(6);
console.log(car2);


var latter = 'Daffa BLK';
var lower =word.toUpperCase();
console.log(lower);

var latter = 'Daffa BLK';
var lower =word.toLowerCase();
console.log(lower);

var username = 'admin';
var newUsername = username.trim();
console.log(newUsername)

var username = 'admin';
var newUsername = username.replace('d', 'n');
console.log(newUsername)

var text = 'saya peserta pelatihan BLK';
text = text.replaceAll(' ', '-');
console.log(text)

var angka = 10
console.log(angka)
console.log(angka+angka)

console.log(String(angka))
console.log(angka.toString())

var angka = angka.toString()

console.log(angka)
console.log(angka+angka)

console.log("==========================")
console.log("==========================")

var kata ="7"
console.log(kata)

console.log(Number(kata))
console.log(parseInt(kata))

var angka1 = 1.5
var angka2 = 2.4 

console.log(angka1)
console.log(angka2)

var angka3 = angka1 + angka2
console.log(angka3)

console.log("==========================")
//Conditional JavaScript
//If

var mood = "Happy"
if ( mood == "Happy" ) {
    console.log("hari ini aku bahagia")
}