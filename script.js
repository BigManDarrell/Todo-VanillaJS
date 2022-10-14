const input = document.getElementById("input");
const ol = document.getElementById("ol");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
let delBtn, doneBtn, li;
let itr = 0;

submitBtn.addEventListener("click", () => {
  ol.innerHTML += `<li class="list-group-item fs-5" id="li-${itr}">
        ${input.value}
        <button class="ms-3 del btn btn-danger btn-sm ms-1">X</button>
        <button class="done done btn btn-success btn-sm">Done</button>
      </li>`;
  input.value = "";
  delBtn = document.querySelectorAll(".del");
  doneBtn = document.querySelectorAll(".done");
  delBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      document.getElementById(`li-${i}`).remove();
      itr--;
    });
  });
  doneBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      document.getElementById(`li-${i}`).style.textDecoration = "line-through";
      e.remove();
    });
  });
  itr++;
});

clearBtn.addEventListener("click", () =>
  document.querySelectorAll("li").forEach((e) => e.remove())
);
