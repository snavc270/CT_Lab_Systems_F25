//imports express and sets up a static file server
import express from "express";
const app = express();
const PORT = 3000; 

//serves files from the "public" folder
app.use(express.static("public"));

//array for storing our messages
const messages = [
	"Hello out there!", 
	"You look familiar", 
	"Greetings from outer space", 
	"Fancy a stroll around the roller rink?"
]; 

//retrieves a message from our API 
app.get('/api/message', (req, res) => {
	//generates a random number
	const index = Math.floor(Math.random() * messages.length); 
    res.json({ message: messages[index] });
}); 

//to debug server
// app.get("/", (req, res) => {
//   res.send("Server is working!");
// });

//starts the server
app.listen(PORT, () => {
  console.log("✅ Server running on http://localhost:3000");
});