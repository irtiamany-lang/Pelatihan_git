console.log("==========================")
//Conditional JavaScript
//If

var mood = "Happy"
if ( mood == "Happy" ) {
    console.log("hari ini aku bahagia")
}

console.log("==========================")
if ( true ) {
    console.log("jalankan code")
}

if ( false ) {
    console.log("code tidak dijalankan")
}

console.log("==========================")
//Conditional JavaScript
//If else dan if else if
console.log("===if else===")
var mood = "Happy"
if ( mood == "Bad" ) {
    console.log("hari ini aku bahagia")
} else{
     console.log("Saya sedang tidak baik baik saja")
}

var mood = "Happy"
if ( mood == "Happy" ) {
    console.log("hari ini aku bahagia")
}else{
     console.log("Saya sedang tidak baik baik saja")
}

console.log("===if else if===")
var mood = "happy"
if ( mood == "Happy" ) {
    console.log("hari ini aku bahagia")
}else if ( mood ="Bad"){
    console.log("Saya sedang tidak baik baik saja")
}else{ 
    console.log("Saya sedang kesewa hari ini")
}

//Nested if
console.log("===Nested if===")
var umur = 35
if(umur >= 17){
    console.log("Sudah Memiliki KTP")
    if(umur > 20){
        console.log("Umur Kurang dari 20 Tahun")
    }else if(umur> 30){
        console.log("Usia antara 20-30 Tahun")
    }else if(umur > 40){
        console.log("Usia antara 30-40 Tahun")
    }else{
        console.log("Sudah berumur")
    }
}else{
    console.log("Belum Memiliki KTP")
}

//Switch Case
console.log("===Switch Case===")
var warna = "Putih"
switch(warna){
    case "Merah" : {
        console.log("Warna Merah")
        break

    }
    case "Kunig" : {
        console.log("Warna Kuning")
        break
    }
    case "Hijau" : {
        console.log("Warna Hijau")
        break
    }
    case "Biru" : {
        console.log("Warna Biru")
        break
    }
    default : {
        console.log("Warna yang anda inginkan tidak ada")
    }
}

//Looping JavaScript
//For-loop
console.log("===Foor-Loop 1===")
for(var angka = 1; angka < 10; angka++) {
    console.log('Iterasi ke-' + angka);
}
console.log("===Foor-Loop 2===")
var jumlah =0;
for(var deret = 5; deret > 0; deret--) {
    jumlah += deret;
    console.log('Jumlah saat ini: ' + jumlah);
}
    console.log('Jumlah terakhir: ' + jumlah);

 //While-Loop
console.log("===While-Loop 1===")
var flag = 1;
while(flag < 10) {
    console.log('Iterasi ke-' + flag);
    flag++;
}
console.log("===While-Loop 2===")
var flag = 9;
do {
    console.log('Iterasi ke-' + flag);
    flag--;
}while(flag > 0)

//LATIHAN//
console.log("===TUGAS===")
var flag = 1;
do {
    console.log('Iterasi ke-' + flag);
    flag++;
}while(flag  < 10)

//TUGAS//
console.log("===Foor-Loop===")
for(var angka = 2; angka <= 10; angka+=2) {
    console.log('Iterasi ke-' + angka);
}
console.log("===While-Loop===")
var flag = 2;
while(flag <= 10) {
    console.log('Iterasi ke-' + flag);
    flag+=2;
}
console.log("===SELESAI===")