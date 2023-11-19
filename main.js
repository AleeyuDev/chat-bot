const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const userMessage = userInput.value;

  // Add user message to chat history
  chatHistory.innerHTML += `<div>User: ${userMessage}</div>`;

  // Check user's message and provide a response
  let botResponse = "I'm sorry, I didn't understand that.";

  if (userMessage.toLowerCase() === "hello") {
    botResponse = "Hi there! How can I help you today?";
  } else if (userMessage.toLowerCase() === "how are you?") {
    botResponse = "I am just a chatbot, but thanks for asking!";
  }

  // Add bot's response to chat history
  chatHistory.innerHTML += `<div>Bot: ${botResponse}</div>`;

  // Clear user input
  userInput.value = "";
}