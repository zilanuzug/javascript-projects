
function hesapla(sayi1, sayi2, islem) {
    if (islem === "+") {
        return sayi1 + sayi2;
    } else if (islem === "-") {
        return sayi1 - sayi2;
    } else if (islem === "*") {
        return sayi1 * sayi2;
    } else if (islem === "/") {
        if (sayi2 === 0) {
            return "Bir sayı sıfıra bölünemez!";
        }
        return sayi1 / sayi2;
    } else {
        return "Geçersiz işlem!";
    }
}

console.log("Toplama:", hesapla(20, 5, "+"));
console.log("Çıkarma:", hesapla(20, 5, "-"));
console.log("Çarpma:", hesapla(20, 5, "*"));
console.log("Bölme:", hesapla(20, 5, "/"));
