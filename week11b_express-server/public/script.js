//locates our random button 
const button = document.getElementById("getMessageBtn");
//locates html element to display message
const messageDisplay = document.getElementById("message");

//adds event listener to button
button.addEventListener("click", async () => {
  // Make a GET request to our API
  const response = await fetch("/api/message");
  const data = await response.json();

  // Display the message
  messageDisplay.textContent = data.message;
});
