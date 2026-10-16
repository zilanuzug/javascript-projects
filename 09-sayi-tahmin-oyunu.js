
let tutulanSayi = Math.floor(Math.random() * 10) + 1;
let tahminler = [3, 7, 5];

console.log("Sayı Tahmin Oyununa Hoş Geldin!");
console.log("1 ile 10 arasında bir sayı tutuldu.");

for (let i = 0; i < tahminler.length; i++) {
    let tahmin = tahminler[i];

    console.log("Tahminin: " + tahmin);

    if (tahmin === tutulanSayi) {
        console.log("Tebrikler, doğru tahmin!");
        break;
    } else if (tahmin < tutulanSayi) {
        console.log("Daha büyük bir sayı dene.");
    } else {
        console.log("Daha küçük bir sayı dene.");
    }
}

console.log("Tutulan sayı: " + tutulanSayi);
