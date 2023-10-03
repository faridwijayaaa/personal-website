let listPortofolio = document.getElementById("list-portofolio");

let listPorto = [
  {
    name: "Todolist",
    img: "../assets/image/portoImg/todolist.jpg",
    description:
      "Ini merupakan Todolist website yang saya kerjakan menggunakan ReactJS dan mempunyai sebuah fitur Speech recognition.",
    link: "https://faridwijayaaa.github.io/todolist-progate/",
  },
  {
    name: "DeVA",
    img: "../assets/image/portoImg/DeVA.png",
    description:
      "Ini merupakan salah satu ChatBot yang pernah saya kerjakan bersama dengan teman saya pada saat PKL di UP3 PLN Kediri. Chatbot ini dibuat dengan menggunakan whatsapp-web.js dan dijalankan menggunakan VPS.",
    link: "https://drive.google.com/file/d/1YQDzWQLgjXi17WkXkqWai4CLvfJa51s1/view?usp=sharing",
  },
];

for (let i = 0; i < listPorto.length; i++) {
  let cardPorto = `
        <div class="card"> 
            <img src="${listPorto[i].img}" />
            <div>
                <h2>${listPorto[i].name}</h2>
                <p>${listPorto[i].description}</p>
                <a href="${listPorto[i].link}" target=_blank>Show me</a>
            </div>
        </div> 
    `;

  listPortofolio.innerHTML += cardPorto;
}
