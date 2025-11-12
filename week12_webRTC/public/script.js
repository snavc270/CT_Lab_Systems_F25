//  simple signaling example using Socket.io 
// Connect to the Socket.io server
// By default, this connects to the same origin the page was served from
const socket = io();

// Get a reference to our log area
const log = document.getElementById("log");

// Listen for "signal" messages coming from the server
// These are sent by other clients via socket.broadcast.emit()
socket.on("signal", (data) => {
    log.value += "\nReceived: " + JSON.stringify(data);
});

// When the "Send Message" button is clicked, send a message to the other client
document.getElementById("sendMessage").onclick = () => {
    const message = { type: "message", sdp: "fakeSDPdata" };

    // Emit a "signal" event to the server
    socket.emit("signal", message);

    // Log it in the UI so the user can see what was sent
    log.value += "\nSent: " + JSON.stringify(message);
};

//browser to browser chat example
const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Display message helper
function addMessage(text, isOwn = false) {
    const msg = document.createElement("div");
    msg.textContent = (isOwn ? "🧑‍💻 You: " : "👩‍🚀 Peer: ") + text;
    msg.style.textAlign = isOwn ? "right" : "left";
    chat.appendChild(msg);
}

// When clicking "Send", emit the message
sendBtn.onclick = () => {
    const message = input.value.trim();
    if (!message) return;
    socket.emit("signal", { type: "chat", text: message });
    addMessage(message, true);
    input.value = "";
};

// When a "signal" is received, check its type
socket.on("signal", (data) => {
    if (data.type === "chat") {
        addMessage(data.text);
    }
});

//clear chat log 
document.getElementById("clearBtn").onclick = () => {
    chat.innerHTML = "";
    console.log("Chat log cleared");
}; 