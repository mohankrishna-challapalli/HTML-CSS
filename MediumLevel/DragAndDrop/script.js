const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  // Add "hold" class to the dragged element and use setTimeout to hide it instantly
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  // Reset the class name of the dragged element
  this.className = "fill";
}

function dragOver(e) {
  // Prevent the default behavior of dragover to allow drop
  e.preventDefault();
}

function dragEnter(e) {
  // Add "hovered" class to the empty container when the dragged element enters it
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  // Remove "hovered" class from the empty container when the dragged element leaves it
  this.className = "empty";
}

function dragDrop() {
  // Reset the class name of the empty container and append the dragged element to it
  this.className = "empty";
  this.append(fill);
}
