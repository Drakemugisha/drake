const button = document.getElementById("dark");
const everything = document.getElementById("everything");

button.addEventListener("click", () => {
    everything.classList.toggle("nothing");
})