const EvendDelegationList = document.querySelector("ol");

EvendDelegationList.addEventListener("click", function (e) {
  if (e.target.matches("li")) {
    console.log("ok");
    e.target.style.background = "red";
    e.target.style.color = "purple";
    switch (e.target.innerText) {
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
function addNewElement() {
  const newElement= document.createElement('li')
  newElement.textContent="Experess Js"
  EvendDelegationList.appendChild(newElement);
}
