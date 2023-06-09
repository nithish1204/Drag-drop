var draggedItem = null;
var successMessage = document.getElementById("successMessage");

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", draggedItem.textContent);
  event.dataTransfer.effectAllowed = "move";
  draggedItem.classList.add("dragging");
}

function drop(event) {
  event.preventDefault();
  draggedItem.classList.remove("dragging");
  var data = event.dataTransfer.getData("text/plain");
  successMessage.style.display = "block";
  successMessage.textContent = "Item '" + data + "' dropped!";
  event.target.appendChild(draggedItem);
}

function resetContainers() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }
  successMessage.style.display = "none";
}
