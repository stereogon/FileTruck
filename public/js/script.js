const fileinput = document.querySelectorAll(".file-input")[0];
const browsebtn = document.querySelectorAll(".browse-btn")[0];
const filename = document.getElementsByClassName("filename")[0];

filename.style.display = "none";

browsebtn.addEventListener("click", () => {
    fileinput.click();
});

fileinput.addEventListener("change", (e) => {
    console.log(e.target.value);
    filename.style.display = "block";
    filename.innerHTML = e.target.value;
})