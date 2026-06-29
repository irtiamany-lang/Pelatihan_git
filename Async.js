// return new Promise( function (resolve, reject){
//         var check = true
//         if (check){
//             resolve("berhasil")
//         }else{
//             reject("gagal")
//         }



        
//     })


// async function hello() {
//     var result = await doAsync()
//     console.log(result)

    
// }
// hello()

//     async function hello() {
//         try {
//             var result = await doAsync()
//             console.log(result)
//         }catch(err){
//             console.log(err)
//         }
    
//     }
//     hello()

//     function doAsync() {
//     return new Promise(function(resolve, reject) {
//         var check = true;
//         if (check) {
//             resolve("berhasil");
//         } else {
//             reject("gagal");
//         }
//     })
// }

// async function hello() {
//     try {
//         var result = await doAsync();
//         console.log("// Async/await");
//         console.log(result);
//     } catch(err) {
//         console.log("// Async/await");
//         console.log(err);
//     }
// }

// async function memeriksaPasien(nomorIdPasien) {
//     try {
//         var hasil = await periksaDataPasien(nomorIdPasien);
//         console.log(hasil);
//     } catch (error) {
//         console.log(error);
//     }
// }

// hello();

// function doAsync() {
//     return new Promise(function(resolve, reject) {
//         var check = true;
//         if (check) {
//             resolve("berhasil");
//         } else {
//             reject("gagal");
//         }
//     })
// }

// async function hello() {
//     try {
//         var result = await doAsync();
//         console.log("// Async/await");
//         console.log(result);
//     } catch(err) {
//         console.log("// Async/await");
//         console.log(err);
//     }
// }

// async function memeriksaPasien(nomorIdPasien) {
//     try {
//         var hasil = await periksaDataPasien(nomorIdPasien);
//         console.log(hasil);
//     } catch (error) {
//         console.log(error);
//     }
// }

// hello();

// function doAsync() {
//     return new Promise(function(resolve, reject) {
//         var check = true;
//         if (check) {
//             resolve("berhasil");
//         } else {
//             reject("gagal");
//         }
//     })
// }

// async function hello() {
//     try {
//         var result = await doAsync();
//         console.log("// Async/await");
//         console.log(result);
//     } catch(err) {
//         console.log("// Async/await");
//         console.log(err);
//     }
// }

// async function memeriksaPasien(nomorIdPasien) {
//     try {
//         var hasil = await periksaDataPasien(nomorIdPasien);
//         console.log(hasil);
//     } catch (error) {
//         console.log(error);
//     }
// }

// hello();


// function doAsync(nomorIdPasien) {
//     return new Promise (function (resolve, reject){
//         var dataPasien = [
//             {id : 1, mana: "Jhone", jenisKelamin : "Laki-laki"},
//             {id : 2, mana: "Daffa", jenisKelamin : "Perempuan"},
//             {id : 3, mana: "Andra", jenisKelamin : "Laki-laki"},
//             {id : 4, mana: "Ilham", jenisKelamin : "Laki-laki"},
//         ]
//         var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
//         if (pasien ===  undefined){
//             reject("data pasien tidak ada")
//         }else {
//             resolve(pasien)
//         }

//     })
// }
// async function hello(nomorIdPasien) {
//     try{
//         var result = await doAsync(nomorIdPasien)
//         console.log(result);
//        }catch(err){
//         console.log(err);
    
//     }
// }

// hello(2)

