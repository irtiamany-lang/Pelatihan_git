

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


//Arrow fanction//
// var tampilkanNama = function(a){
//     console.log("halo, "+ a)
// }
// tampilkanNama("Huda")


//Anonymus fanction//
// const tampilkanNama = (a) => {
//     console.log("Halo, "+ a)
// }
// tampilkanNama("Huda")


// const hitungPersegi = (sisi) => {
//     const luas = (s) => s * s
//     const keliling = (s) => 4 * s
    
//     console.log("Luas Persegi = ",luas(sisi))
//     console.log("Keliling Persegi = ",keliling(sisi))
// }
// hitungPersegi(5)

// let nama = "Irtiyaah Nailah Zaky Amany"
// console.log("Halo, Selamat datang." ,nama)
// console.log("Halo, Selamat datang." + nama)

// console.log("Halo, "+nama +".  Selamat datang.")

// console.log(`Halo, ${nama}. Selamat datang!`)

// Text1 = "Halo"
// Text2 = "Selamat"
// Text3 = "datang"

// console.log(Text1+", "+Text2+", "+Text3)
// console.log(`${Text1} ${Text2} ${Text3}`)

//Enchanded object literals
// let nama = "Irtiyaah"
// let person = {
//     nama : nama,
//     umur : 23

// }
// console.log(person)

//Destructuring
// let number = [6,4,7,8,5]
// let number1 = number[0]
// let number2 = number[1]
// let number3 = number[2]
// let number4 = number[3]
// let number5 = number[4]
// let number6 = number[5]
// let number7 = number[6]

// let [num1, num2, num3, num4, lastNum] = [1,5,6,7,8]
// console.log(num3)

// let nama = "Irtiyaah"
// let person = {
//     nama : names,
//     umur : 23,
//     tinggi : 173

// }
// let namaPerson = person.nama
// let umurPerson = person.umur
// let tinggiPerson = person.tinggi
// let {nama, umur, tinggi} = person
// console.log(umur)

//Rest Parameter
// let [num1, ... lastNum] = [1,5,6,7,8]
// let footballers = ["Messi", "Ronaldo", "Mbappe", "Halland", "Neymar"]
// // let [foot1, foot2, foot3, foot4, foot5] = footballers
// let [foot1, ... restfoots] = footballers
// // console.group(foot3)
// console.group(restfoots)

//Spread Operator
// let buah = ["magga", "durian", "matoa"]

// buah = ["mangga", ...buah, "jeruk"]
// console.log(buah)


// Promise
// var isMomHappy = false;
// var willGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'samsung',
//                 color: 'black'

//             };
//             resolve(phone);
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason);
//         }
//     }
// );

// function askMom() {
//     willGetNewPhone
//     .then(function (fulfilled) {
//         console.log(fulfilled);
//     })
//     .catch(function (error) {
//         console.log(error.message);
//     });

// }

// askMom()

// function doAsync()
    return new Promise( function (resolve, reject){
        var check = true
        if (check){
            resolve("berhasil")
        }else{
            reject("gagal")
        }
        
    })


async function hello() {
    var result = await doAsync()
    console.log(result)

    
}
hello()

// async function hello() {
//     try {
//         var result = await doAsync()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }

// }
// hello()