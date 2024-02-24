// Define a function to remove a node from the DOM with a delay
function removeNodeWithDelay(nodeId, delay) {
  setTimeout(function() {
    var node = document.getElementById(nodeId);
    if (node) {
      node.parentNode.removeChild(node); // Remove the node itself
    }
  }, delay);
}

// Simulate memory cleanup by removing nodes in the specified order with a delay of 2 seconds between removals
function cleanupMemory() {
  // Remove leaf nodes first with a delay of 2 seconds
  removeNodeWithDelay("image2", 2000);
  removeNodeWithDelay("script1", 4000);
  removeNodeWithDelay("style1", 6000);

  // Remove child nodes next with a delay of 2 seconds
  setTimeout(function() {
    removeNodeWithDelay("aboutPage", 2000);
    removeNodeWithDelay("contactPage", 4000);
  }, 8000);

  // Remove parent node last with a delay of 2 seconds
  setTimeout(function() {
    removeNodeWithDelay("homePage", 2000);
  }, 12000);
}

// Call cleanupMemory function to initiate the simulation
cleanupMemory();