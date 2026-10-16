
const vizeInput = document.getElementById("vize");
const finalInput = document.getElementById("final");
const hesaplaButton = document.getElementById("hesapla");

const sonuc = document.getElementById("sonuc");
const ortalamaAlani = document.getElementById("ortalama");
const durumAlani = document.getElementById("durum");
const detayAlani = document.getElementById("detay");
const hataAlani = document.getElementById("hata");

hesaplaButton.addEventListener("click", function () {
    const vize = vizeInput.value.trim();
    const finalNotu = finalInput.value.trim();

    hataAlani.textContent = "";
    sonuc.hidden = true;

    if (vize === "" || finalNotu === "") {
        hataAlani.textContent = "Lütfen iki sınav notunu da gir.";
        return;
    }

    const vizeNotu = Number(vize);
    const final = Number(finalNotu);

    if (
        !Number.isFinite(vizeNotu) ||
        !Number.isFinite(final) ||
        vizeNotu < 0 || vizeNotu > 100 ||
        final < 0 || final > 100
    ) {
        hataAlani.textContent =
            "Notlar 0 ile 100 arasında olmalıdır.";
        return;
    }

    const ortalama = vizeNotu * 0.4 + final * 0.6;

    ortalamaAlani.textContent = ortalama.toFixed(2);

    if (ortalama >= 50) {
        durumAlani.textContent = "Başarılı!";
        detayAlani.textContent =
            "Belirlenen örnek geçme notunu karşıladın.";
    } else {
        durumAlani.textContent = "Başarısız";
        detayAlani.textContent =
            "Ortalaman örnek geçme notunun altında.";
    }

    sonuc.hidden = false;
});
