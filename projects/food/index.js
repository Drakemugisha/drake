const input = document.getElementById("dark");
const something = document.getElementById("main");

input.addEventListener("click", () =>{
    something.classList.toggle("else");
})