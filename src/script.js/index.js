const botao = document.querySelector("#buttonHeader")

botao.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("show")
    document.querySelector(".segundaSection").classList.toggle("show")
})