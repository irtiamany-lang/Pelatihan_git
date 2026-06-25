// //Implementasi Fungction Javascript
// console.log("===Fungtion 1===")
// function tampilkan(){
//     console.log("Hallo!")
// }
// tampilkan()

// console.log("===Fungtion 2===")
// function munculkanAngkaDelapan(){
//     return 8
// }
//  var tampung = munculkanAngkaDelapan()
//  console.log(tampung)

//  console.log("===Fungtion 3===")
//  function kalikanDua(angka){
//     return angka * 2
// }
//  var tampung = kalikanDua(2)
//  console.log(tampung)

//  console.log("===Fungtion 4===")
//   function tampilkanAngka(angkaPertama, angkaKedua=2){
//     return angkaPertama + angkaKedua
// }
//  console.log(tampilkanAngka(5, 3))
//  console.log(tampilkanAngka(6,))
 
//  // kalo ingin menambahkan kalimat di parameter
//  console.log("===Fungtion 1===")
// function tampilkan(nama){
//     console.log("Hallo!", nama)
// }
// var nama = "Daffa"
// tampilkan(nama)

// //Anonymous Function
// console.log("===Anonymous Function===")
// var fungsiPerkalian = function(angkaPertama, angkaKedua) {
//     return angkaPertama * angkaKedua
// }
// console.log(fungsiPerkalian(2,5))


// //Recursive Function
// function countDown(number) {
//     console.log(number)

//     var newNumber = number - 2
//     if (newNumber > 0) {
//         countDown(newNumber)
//     }
// }
// countDown(10)

// console.log("===Recursive Function===")
//Recursive Function
// function hitungLingkaran(radius){
//     var pi = 22/7

//     function luas(r){
//         return pi * r * r
//     }
//     function keliling(r){
//         return 2 * pi * r
//     }
//     console.log("Luas Lingkaran = ",luas(radius))
//     console.log("Keliling Lingkaran = ",keliling(radius))
// }
// hitungLingkaran(5)
// console.log("===SELESAI===")



console.log("===First-class Function===")
function hitungPersegi(sisi){

    function luas(s){
        return s * s
    }
    function keliling(s){
        return 4 * s
    }
    console.log("Luas Persegi = ",luas(sisi))
    console.log("Keliling Persegi = ",keliling(sisi))
}
hitungPersegi(5)
console.log("===SELESAI===")

// console.log("===Currying Function===")
// function tambah (a, b){
//     return a + b
// }
// console.log(tambah(2, 5))

// function tambah (a){
//     return function(b){
//         return a + b
//     }
// }
// console.log(tambah(2)(5))