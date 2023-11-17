const EvendDelegation = document.querySelector("ol");
console.log("🚀 > file: index.js:2 > EvendDelegation:", EvendDelegation);
EvendDelegation.addEventListener("click", function (e) {
  console.dir(e.target);
  if (e.target.matches("li")) {
    console.log("ok");
    e.target.style.background = "red";
    e.target.style.color = "purple";
    switch (e.target.textContent) {
      case "JavaScript":
        e.target.style.background = "aqua";
        break;
      case "TypeScript":
        e.target.style.background = "yellow";
        e.target.style.color = "red";

        break;
      case "React":
        e.target.style.background = "green";
        break;
      case "MongoDb":
        e.target.style.background = "orange";
      default:
        break;
    }
  }
});
