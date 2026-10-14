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

const selectableGroup = document.querySelectorAll(".selectable");
selectableGroup.forEach(function (item, i, arr) {
   item.addEventListener("click", (event) => {
      item.classList.toggle("select");
   });
});
