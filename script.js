
const form = document.getElementById("gorevFormu");
const adInput = document.getElementById("gorevAdi");
const kategoriInput = document.getElementById("kategori");
const tarihInput = document.getElementById("tarih");
const filtreInput = document.getElementById("filtre");
const liste = document.getElementById("gorevListesi");
const bosMesaj = document.getElementById("bosMesaj");

const toplamGorev = document.getElementById("toplamGorev");
const aktifGorev = document.getElementById("aktifGorev");
const bitmisGorev = document.getElementById("bitmisGorev");

const KAYIT_ANAHTARI = "ogrenciPlanlayiciGorevleri";

function kayitlariOku() {
    try {
        const kayit = localStorage.getItem(KAYIT_ANAHTARI);
        const veriler = kayit ? JSON.parse(kayit) : [];

        return Array.isArray(veriler) ? veriler : [];
    } catch {
        return [];
    }
}

let gorevler = kayitlariOku();

function kaydet() {
    try {
        localStorage.setItem(KAYIT_ANAHTARI, JSON.stringify(gorevler));
    } catch {
        alert("Görevler kaydedilemedi. Tarayıcı depolama alanını kontrol et.");
    }
}

function tarihiGoster(tarih) {
    if (!tarih) {
        return "Son tarih belirlenmedi";
    }

    const parcalar = tarih.split("-");
    return parcalar[2] + "." + parcalar[1] + "." + parcalar[0];
}

function istatistikleriGuncelle() {
    const tamamlanan = gorevler.filter(function (gorev) {
        return gorev.tamamlandi;
    }).length;

    toplamGorev.textContent = gorevler.length;
    aktifGorev.textContent = gorevler.length - tamamlanan;
    bitmisGorev.textContent = tamamlanan;
}

function listeyiGuncelle() {
    liste.replaceChildren();

    const filtre = filtreInput.value;

    const gorunenGorevler = gorevler.filter(function (gorev) {
        if (filtre === "aktif") {
            return !gorev.tamamlandi;
        }

        if (filtre === "tamamlanan") {
            return gorev.tamamlandi;
        }

        return true;
    });

    gorunenGorevler.forEach(function (gorev) {
        const li = document.createElement("li");
        li.className = "task-item";

        if (gorev.tamamlandi) {
            li.classList.add("done");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-check";
        checkbox.checked = gorev.tamamlandi;
        checkbox.setAttribute("aria-label", gorev.ad + " görevini tamamla");

        checkbox.addEventListener("change", function () {
            gorev.tamamlandi = checkbox.checked;
            kaydet();
            listeyiGuncelle();
        });

        const content = document.createElement("div");
        content.className = "task-content";

        const name = document.createElement("div");
        name.className = "task-name";
        name.textContent = gorev.ad;

        const meta = document.createElement("div");
        meta.className = "task-meta";

        const category = document.createElement("span");
        category.className = "category";
        category.textContent = gorev.kategori;

        const date = document.createElement("span");
        date.textContent = tarihiGoster(gorev.tarih);

        meta.append(category, date);
        content.append(name, meta);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Sil";
        deleteButton.setAttribute("aria-label", gorev.ad + " görevini sil");

        deleteButton.addEventListener("click", function () {
            gorevler = gorevler.filter(function (item) {
                return item.id !== gorev.id;
            });

            kaydet();
            listeyiGuncelle();
        });

        li.append(checkbox, content, deleteButton);
        liste.appendChild(li);
    });

    bosMesaj.hidden = gorunenGorevler.length > 0;
    bosMesaj.textContent = gorevler.length === 0
        ? "Henüz görev yok. İlk görevini ekleyebilirsin."
        : "Bu filtrede gösterilecek görev yok.";

    istatistikleriGuncelle();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ad = adInput.value.trim();

    if (!ad) {
        return;
    }

    gorevler.unshift({
        id: Date.now().toString() + Math.random().toString(16).slice(2),
        ad: ad,
        kategori: kategoriInput.value,
        tarih: tarihInput.value,
        tamamlandi: false
    });

    kaydet();
    form.reset();
    adInput.focus();
    listeyiGuncelle();
});

filtreInput.addEventListener("change", listeyiGuncelle);

listeyiGuncelle();
