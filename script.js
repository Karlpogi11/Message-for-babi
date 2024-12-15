body {
  margin: 0;
  height: 100vh;
  cursor: none; /* Hide default cursor */
}

.cursor {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  pointer-events: none; /* Prevents interaction with the cursor */
  transform: translate(-50%, -50%);
}
