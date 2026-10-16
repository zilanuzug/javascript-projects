
let sayilar = [12, 25, 8, 40, 15, 30];

let toplam = 0;
let enBuyuk = sayilar[0];
let enKucuk = sayilar[0];

for (let i = 0; i < sayilar.length; i++) {
    toplam += sayilar[i];

    if (sayilar[i] > enBuyuk) {
        enBuyuk = sayilar[i];
    }

    if (sayilar[i] < enKucuk) {
        enKucuk = sayilar[i];
    }
}

let ortalama = toplam / sayilar.length;

console.log("Sayılar:", sayilar);
console.log("Toplam:", toplam);
console.log("Ortalama:", ortalama);
console.log("En büyük sayı:", enBuyuk);
console.log("En küçük sayı:", enKucuk);
