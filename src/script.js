// Elemen penting
const inputNama = document.getElementById("name");
const inputJurusan = document.getElementById("jurusan");
const inputNim = document.getElementById("nim");
const button = document.getElementById("button");
const table = document.getElementById("table");

// Fungsi input nama
function addNama() {
  return inputNama.value.trim();
}

// Fungsi input jurusan
function addJurusan() {
  return inputJurusan.value.trim();
}

// Fungsi untuk nim
function addNim() {
  return inputNim.value.trim();
}

// Fungsi ngecek ketika semua input value kosong
function cek() {
  if (addNama() == "" || addJurusan() == "" || addNim() == "") {
    alert("Input Tidak Boleh Ada yang Kosong!!");
    return false;
  }
  return true;
}

function add() {
  // Validasi
  if (!cek()) return;

  // membuat tr
  const tr = document.createElement("tr");
  const tdNama = document.createElement("td"); // td nama
  const tdJurusan = document.createElement("td"); // td jurusan
  const tdNim = document.createElement("td"); // td nim

  tdNama.textContent = addNama();
  tdJurusan.textContent = addJurusan();
  tdNim.textContent = addNim();

  // Menambahkan td ke dalam tr
  tr.appendChild(tdNama);
  tr.appendChild(tdJurusan);
  tr.appendChild(tdNim);

  tr.classList.add("bg-slate-200", "odd:bg-slate-400");

  tdNama.classList.add(
    "border",
    "border-slate-800",
    "p-3",
    "text-center",
    "text-small"
  );
  tdJurusan.classList.add(
    "border",
    "border-slate-800",
    "p-3",
    "text-center",
    "text-small"
  );
  tdNim.classList.add(
    "border",
    "border-slate-800",
    "p-3",
    "text-center",
    "text-small"
  );

  // menambahkan tr ke dalam table
  table.appendChild(tr);

  // reset input
  inputNama.value = "";
  inputJurusan.value = "";
  inputNim.value = "";
}

button.addEventListener("click", add);

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    add();
  }
});
