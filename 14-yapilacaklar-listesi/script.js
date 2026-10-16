
const form = document.getElementById("gorevFormu");
const input = document.getElementById("gorevInput");
const liste = document.getElementById("gorevListesi");
const bosMesaj = document.getElementById("bosMesaj");
const gorevSayisi = document.getElementById("gorevSayisi");
const tamamlananSayisi = document.getElementById("tamamlananSayisi");

let gorevler = [];

function listeyiGuncelle() {
    liste.replaceChildren();

    gorevler.forEach(function (gorev) {
        const li = document.createElement("li");
        li.className = "task";

        if (gorev.tamamlandi) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = gorev.tamamlandi;
        checkbox.setAttribute("aria-label", gorev.metin + " görevini tamamla");

        checkbox.addEventListener("change", function () {
            gorev.tamamlandi = checkbox.checked;
            listeyiGuncelle();
        });

        const metin = document.createElement("span");
        metin.className = "task-text";
        metin.textContent = gorev.metin;

        const silButton = document.createElement("button");
        silButton.className = "delete";
        silButton.type = "button";
        silButton.textContent = "Sil";
        silButton.setAttribute("aria-label", gorev.metin + " görevini sil");

        silButton.addEventListener("click", function () {
            gorevler = gorevler.filter(function (item) {
                return item.id !== gorev.id;
            });

            listeyiGuncelle();
        });

        li.append(checkbox, metin, silButton);
        liste.appendChild(li);
    });

    const tamamlanan = gorevler.filter(function (gorev) {
        return gorev.tamamlandi;
    }).length;

    gorevSayisi.textContent = gorevler.length + " görev";
    tamamlananSayisi.textContent = tamamlanan + " tamamlandı";
    bosMesaj.hidden = gorevler.length > 0;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const metin = input.value.trim();

    if (metin === "") {
        return;
    }

    gorevler.push({
        id: Date.now() + Math.random(),
        metin: metin,
        tamamlandi: false
    });

    input.value = "";
    input.focus();

    listeyiGuncelle();
});

listeyiGuncelle();
