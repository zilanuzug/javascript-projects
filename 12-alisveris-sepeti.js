
let urunler = [
    { ad: "Klavye", fiyat: 450, adet: 1 },
    { ad: "Mouse", fiyat: 250, adet: 2 },
    { ad: "USB Bellek", fiyat: 180, adet: 1 },
    { ad: "Kulaklık", fiyat: 600, adet: 1 }
];

let toplam = 0;

console.log("=== ALIŞVERİŞ SEPETİ ===");

for (let i = 0; i < urunler.length; i++) {
    let urun = urunler[i];
    let araToplam = urun.fiyat * urun.adet;

    console.log(
        urun.ad + " x " + urun.adet + " = " + araToplam + " TL"
    );

    toplam += araToplam;
}

console.log("------------------------");
console.log("Genel toplam: " + toplam + " TL");

if (toplam >= 1000) {
    console.log("İndirim: 100 TL");
    toplam -= 100;
}

console.log("Ödenecek tutar: " + toplam + " TL");
