// change active menu
const menuLi = document.querySelectorAll(".nav_middle ul li");

function setMenuActive() {
  menuLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

// react 
$(".like_btn").faceMocion({
  emociones:[
    {"emocion":"amo","TextoEmocion":"Lo amo"},
    {"emocion":"molesto","TextoEmocion":"Me molesta"},
    {"emocion":"asusta","TextoEmocion":"Me asusta"},
    {"emocion":"divierte","TextoEmocion":"Me divierte"},
    {"emocion":"gusta","TextoEmocion":"Me gusta"},
    {"emocion":"triste","TextoEmocion":"Me entristece"},
    {"emocion":"asombro","TextoEmocion":"Me asombra"},
    {"emocion":"alegre","TextoEmocion":"Me alegra"}
    ]
});