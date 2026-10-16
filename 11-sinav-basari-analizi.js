
let notlar = [85, 70, 45, 90, 60];

function ortalamaHesapla(notlar) {
    let toplam = 0;

    for (let i = 0; i < notlar.length; i++) {
        toplam += notlar[i];
    }

    return toplam / notlar.length;
}

function basariliOgrenciSayisi(notlar) {
    let sayac = 0;

    for (let i = 0; i < notlar.length; i++) {
        if (notlar[i] >= 50) {
            sayac++;
        }
    }

    return sayac;
}

console.log("Sınav notları:", notlar);
console.log("Not ortalaması:", ortalamaHesapla(notlar));
console.log("Başarılı öğrenci sayısı:", basariliOgrenciSayisi(notlar));
console.log("Başarısız öğrenci sayısı:", notlar.length - basariliOgrenciSayisi(notlar));
