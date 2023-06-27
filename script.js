//your code here
document.querySelectorAll("#calculator button").forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonId = event.target.id;
  const display = document.getElementById("display");
  
  switch (buttonId) {
    case "C":
      // Clear the display
      display.value = "";
      break;
    case "back":
      // Remove the last character from display
      display.value = display.value.slice(0, -1);
      break;
    case "equal":
      // Evaluate the expression and display the result
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
      break;
    default:
      // Append the button value to the display
      display.value += buttonId;
      break;
  }
}