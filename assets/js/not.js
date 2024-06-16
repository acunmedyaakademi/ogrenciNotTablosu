let students = document.querySelector(".students");
let vize1 = document.querySelector("#vize1");
let vize2 = document.querySelector("#vize2");
let final = document.querySelector("#final");
let tablo = document.querySelector(".tablo");
let clearStorage = document.querySelector("#clearStorage");
let frontEnd = document.querySelector(".frontEnd");
let backend = document.querySelector(".backend");
let mobile = document.querySelector(".mobile");

let toplam = 0;
let studentsArray = [];

if (typeof localStorage.studentsArray !== "undefined") {
  studentsArray = JSON.parse(localStorage.studentsArray);
  addData.disabled = true;
} else {
  addData.disabled = false;
}

renderTable();

addData.addEventListener("click", function () {
  studentsArray = [
    {
      id: 1,
      name: "Nihat",
      lastname: "Duysak",
      section: "Frontend",
      midterm1: 80,
      midterm2: 75,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 2,
      name: "Ayşe",
      lastname: "Yılmaz",
      section: "Frontend",
      midterm1: 60,
      midterm2: 70,
      final: 75,
      grade: "",
      note: "",
    },
    {
      id: 3,
      name: "Mehmet",
      lastname: "Kaya",
      section: "Frontend",
      midterm1: 85,
      midterm2: 80,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 4,
      name: "Fatma",
      lastname: "Demir",
      section: "Frontend",
      midterm1: 70,
      midterm2: 65,
      final: 80,
      grade: "",
      note: "",
    },
    {
      id: 5,
      name: "Ali",
      lastname: "Çelik",
      section: "Frontend",
      midterm1: 75,
      midterm2: 70,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 6,
      name: "Esra",
      lastname: "Öz",
      section: "Frontend",
      midterm1: 90,
      midterm2: 85,
      final: 95,
      grade: "",
      note: "",
    },
    {
      id: 7,
      name: "Can",
      lastname: "Şahin",
      section: "Frontend",
      midterm1: 65,
      midterm2: 60,
      final: 70,
      grade: "",
      note: "",
    },
    {
      id: 8,
      name: "Murat",
      lastname: "Arslan",
      section: "Frontend",
      midterm1: 80,
      midterm2: 75,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 9,
      name: "Derya",
      lastname: "Aksoy",
      section: "Frontend",
      midterm1: 85,
      midterm2: 80,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 10,
      name: "Serkan",
      lastname: "Eren",
      section: "Frontend",
      midterm1: 70,
      midterm2: 75,
      final: 80,
      grade: "",
      note: "",
    },

    {
      id: 11,
      name: "Berk",
      lastname: "Yıldız",
      section: "Backend",
      midterm1: 75,
      midterm2: 70,
      final: 80,
      grade: "",
      note: "",
    },
    {
      id: 12,
      name: "Zeynep",
      lastname: "Karaca",
      section: "Backend",
      midterm1: 80,
      midterm2: 85,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 13,
      name: "Emre",
      lastname: "Bulut",
      section: "Backend",
      midterm1: 65,
      midterm2: 70,
      final: 75,
      grade: "",
      note: "",
    },
    {
      id: 14,
      name: "Hülya",
      lastname: "Güneş",
      section: "Backend",
      midterm1: 70,
      midterm2: 75,
      final: 80,
      grade: "",
      note: "",
    },
    {
      id: 15,
      name: "Okan",
      lastname: "Işık",
      section: "Backend",
      midterm1: 85,
      midterm2: 80,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 16,
      name: "Seda",
      lastname: "Polat",
      section: "Backend",
      midterm1: 75,
      midterm2: 80,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 17,
      name: "Furkan",
      lastname: "Yücel",
      section: "Backend",
      midterm1: 80,
      midterm2: 75,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 18,
      name: "Gizem",
      lastname: "Kılıç",
      section: "Backend",
      midterm1: 90,
      midterm2: 85,
      final: 95,
      grade: "",
      note: "",
    },
    {
      id: 19,
      name: "Tuna",
      lastname: "Koç",
      section: "Backend",
      midterm1: 65,
      midterm2: 70,
      final: 75,
      grade: "",
      note: "",
    },
    {
      id: 20,
      name: "Ece",
      lastname: "Er",
      section: "Backend",
      midterm1: 70,
      midterm2: 75,
      final: 80,
      grade: "",
      note: "",
    },

    {
      id: 21,
      name: "Deniz",
      lastname: "Aydın",
      section: "Mobile",
      midterm1: 75,
      midterm2: 80,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 22,
      name: "Efe",
      lastname: "Duman",
      section: "Mobile",
      midterm1: 70,
      midterm2: 75,
      final: 80,
      grade: "",
      note: "",
    },
    {
      id: 23,
      name: "Buse",
      lastname: "Taş",
      section: "Mobile",
      midterm1: 80,
      midterm2: 85,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 24,
      name: "Umut",
      lastname: "Öztürk",
      section: "Mobile",
      midterm1: 85,
      midterm2: 80,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 25,
      name: "Merve",
      lastname: "Sevgi",
      section: "Mobile",
      midterm1: 75,
      midterm2: 70,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 26,
      name: "Ozan",
      lastname: "Uslu",
      section: "Mobile",
      midterm1: 70,
      midterm2: 75,
      final: 80,
      grade: "",
      note: "",
    },
    {
      id: 27,
      name: "Fırat",
      lastname: "Can",
      section: "Mobile",
      midterm1: 85,
      midterm2: 80,
      final: 90,
      grade: "",
      note: "",
    },
    {
      id: 28,
      name: "Gökçe",
      lastname: "Deniz",
      section: "Mobile",
      midterm1: 80,
      midterm2: 75,
      final: 85,
      grade: "",
      note: "",
    },
    {
      id: 29,
      name: "Hakan",
      lastname: "Kurt",
      section: "Mobile",
      midterm1: 75,
      midterm2: 70,
      final: 80,
      grade: "",
      note: "",
    },
    {
      id: 30,
      name: "Sinem",
      lastname: "Yalçın",
      section: "Mobile",
      midterm1: 80,
      midterm2: 85,
      final: 90,
      grade: "",
      note: "",
    },
  ];

  for (let i = 0; i < studentsArray.length; i++) {
    studentsArray[i].grade = handleTotal(
      studentsArray[i].midterm1,
      studentsArray[i].midterm2,
      studentsArray[i].final
    );
    studentsArray[i].note = handleScoreControl();
  }

  save();
  renderTable();

  addData.disabled = true;
});

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(students);
  let formObj = Object.fromEntries(formData);

  studentsArray.push({
    id: studentsArray.length + 1,
    name: formObj.name,
    lastname: formObj.lname,
    section: formObj.section,
    midterm1: Number(formObj.vize1),
    midterm2: Number(formObj.vize2),
    final: Number(formObj.final),
    grade: handleTotal(formObj.vize1, formObj.vize2, formObj.final),
    note: handleScoreControl(),
  });

  students.reset();
  save();
  renderTable();
}

students.addEventListener("submit", handleFormSubmit);

function save() {
  localStorage.studentsArray = JSON.stringify(studentsArray);
}

function renderTable() {
  frontEnd.innerHTML = "";
  backend.innerHTML = "";
  mobile.innerHTML = "";

  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].section === "Frontend") {
      frontEnd.innerHTML += `<div class="student">
      <h5>${studentsArray[i].name} ${studentsArray[i].lastname}</h5>
      <h6>${studentsArray[i].section}</h6>
      <p>Vize1: ${studentsArray[i].midterm1}</p>
      <p>Vize2: ${studentsArray[i].midterm2}</p>
      <p>Final: ${studentsArray[i].final}</p>
      <p>Ortalama: ${studentsArray[i].grade} - ${studentsArray[i].note}</p>
  </div>`;
    } else if (studentsArray[i].section === "Backend") {
      backend.innerHTML += `<div class="student">
      <h5>${studentsArray[i].name} ${studentsArray[i].lastname}</h5>
      <h6>${studentsArray[i].section}</h6>
      <p>Vize1: ${studentsArray[i].midterm1}</p>
      <p>Vize2: ${studentsArray[i].midterm2}</p>
      <p>Final: ${studentsArray[i].final}</p>
      <p>Ortalama: ${studentsArray[i].grade} - ${studentsArray[i].note}</p>
  </div>`;
    } else if (studentsArray[i].section === "Mobile") {
      mobile.innerHTML += `<div class="student">
      <h5>${studentsArray[i].name} ${studentsArray[i].lastname}</h5>
      <h6>${studentsArray[i].section}</h6>
      <p>Vize1: ${studentsArray[i].midterm1}</p>
      <p>Vize2: ${studentsArray[i].midterm2}</p>
      <p>Final: ${studentsArray[i].final}</p>
      <p>Ortalama: ${studentsArray[i].grade} - ${studentsArray[i].note}</p>
  </div>`;
    }
  }
}

clearStorage.addEventListener("click", handleClear);

function handleClear() {
  localStorage.clear();
  frontEnd.innerHTML = "";
  backend.innerHTML = "";
  mobile.innerHTML = "";
  studentsArray = [];
  renderTable();
  students.reset();
  addData.disabled = false;
}

function handleTotal(vize1, vize2, final) {
  let ortVize1 = Number(vize1) * 0.3;
  let ortVize2 = Number(vize2) * 0.3;
  let ortFinal = Number(final) * 0.4;
  toplam = ortVize1 + ortVize2 + ortFinal;

  return toplam;
}

function handleScoreControl() {
  if (toplam >= 90) {
    return "AA Başarılı";
  } else if (toplam >= 85) {
    return "BA Başarılı";
  } else if (toplam >= 80) {
    return "BB Başarılı";
  } else if (toplam >= 75) {
    return "CB Geçer";
  } else if (toplam >= 70) {
    return "CC Geçer";
  } else if (toplam >= 65) {
    return "DC Koşullu Geçer";
  } else if (toplam >= 60) {
    return "DD Koşullu Geçer";
  } else if (toplam >= 50) {
    return "FD Başarısız";
  } else {
    return "FF Başarısız Kaldın";
  }
}
