const cursor = document.querySelector(".cursor");

// Prevent scrolling on mobile devices
document.body.style.overflow = "hidden";

// Handle mouse movement (desktop)
window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.x - 50 + "px"; // Adjust to center the circle
  cursor.style.top = e.y - 50 + "px";
  cursor.style.display = "block"; // Ensure it's visible
});

// Handle touch start (mobile)
window.addEventListener("touchstart", function (e) {
  const touch = e.touches[0]; // First touch point
  cursor.style.left = touch.clientX - 50 + "px";
  cursor.style.top = touch.clientY - 50 + "px";
  cursor.style.display = "block"; // Show the circle
}, { passive: false });

// Handle touch move (mobile)
window.addEventListener("touchmove", function (e) {
  const touch = e.touches[0];
  cursor.style.left = touch.clientX - 50 + "px";
  cursor.style.top = touch.clientY - 50 + "px";
  e.preventDefault(); // Prevent scrolling behavior
}, { passive: false });

// Handle touch end (mobile)
window.addEventListener("touchend", function () {
  cursor.style.display = "none"; // Hide the circle when touch ends
});
