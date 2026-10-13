const checkBox = document.getElementById("checkmark");
let selected = false;
checkBox.addEventListener("click", (e) => {
   if (!selected) {
      selected = true;
      checkBox.classList.add("selected");
   } else {
      selected = false;
      checkBox.classList.remove("selected");
   }
});
