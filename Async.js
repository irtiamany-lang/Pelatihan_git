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

function periksaDataPasien(nomorIdPasien) {
    var dataPasien = [
        {id: 1, nama: "Jhone", jenisKelamin: "Laki-Laki"},
        {id: 2, nama: "Daffa", jenisKelamin: "Perempuan"},
        {id: 3, nama: "Yulita", jenisKelamin: "Perempuan"},
        {id: 4, nama: "Irtiyaah", jenisKelamin: "Perempuan"},
    ]
    return new Promise(function (resolve, reject){
        var pasien = dataPasien.find(x => x.id === nomorIdPasien)
        if (pasien === undefined){
            reject("data pasien tidak ada")
        }else{
            resolve(pasien)
        }
    })
    
    
}
periksaDataPasien(5).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})
function doAsync() {
    return new Promise(function(resolve, reject) {
        var check = true;
        if (check) {
            resolve("berhasil");
        } else {
            reject("gagal");
        }
    })
}

async function hello() {
    try {
        var result = await doAsync();
        console.log("// Async/await");
        console.log(result);
    } catch(err) {
        console.log("// Async/await");
        console.log(err);
    }
}

async function memeriksaPasien(nomorIdPasien) {
    try {
        var hasil = await periksaDataPasien(nomorIdPasien);
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

hello();