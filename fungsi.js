//Implementasi Fungction Javascript
console.log("===Fungtion 1===")
function tampilkan(){
    console.log("Hallo!")
}
tampilkan()

console.log("===Fungtion 2===")
function munculkanAngkaDelapan(){
    return 8
}
 var tampung = munculkanAngkaDelapan()
 console.log(tampung)

 console.log("===Fungtion 3===")
 function kalikanDua(angka){
    return angka * 2
}
 var tampung = kalikanDua(2)
 console.log(tampung)

 console.log("===Fungtion 4===")
  function tampilkanAngka(angkaPertama, angkaKedua=2){
    return angkaPertama + angkaKedua
}
 console.log(tampilkanAngka(5, 3))
 console.log(tampilkanAngka(6,))
 
 // kalo ingin menambahkan kalimat di parameter
 console.log("===Fungtion 1===")
function tampilkan(nama){
    console.log("Hallo!", nama)
}
var nama = "Daffa"
tampilkan(nama)

//Anonymous Function
console.log("===Anonymous Function===")
var fungsiPerkalian = function(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
}
console.log(fungsiPerkalian(2,5))

