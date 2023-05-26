//your JS code here. If required.
// script.js
window.onload = function() {
  var element = document.getElementById("level");
  var level = getDOMLevel(element);
  alert("The level of the element is: " + level);
};

function getDOMLevel(element) {
  var level = 1;
  var currentNode = element;

  while (currentNode.parentNode) {
    level++;
    currentNode = currentNode.parentNode;
  }

  return level;
}
