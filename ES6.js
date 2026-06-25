

// var nama = "John"
// var nama = "Doe"
// console.log(nama)



// //Let
// let nama = "Jhon"

// if(true)

//     {
//         let nama = "Doe"
//         console.log(nama)
//     }
// console.log(nama)

// const pi = 2.14

// pi = 22/7
// console.log(pi)

// console.log("===Fungtion 1===")
// function tampilkan(){
//     console.log("Hallo, " + a)
// }
// tampilkan("Huda")


//Anonymus fanction//
// var tampilkanNama = function(a){
//     console.log("halo, "+ a)
// }
// tampilkanNama("Huda")

//
// const tampilkanNama = (a) => {
//     console.log("Halo, "+ a)
// }
// tampilkanNama("Huda")


const hitungPersegi = (sisi) => {
    const luas = (s) => s * s
    const keliling = (s) => 4 * s
    
    console.log("Luas Persegi = ",luas(sisi))
    console.log("Keliling Persegi = ",keliling(sisi))
}
hitungPersegi(5)