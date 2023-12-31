const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./db");
const {userRouter} = require('./routes/city.router');

const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json())
app.use(cors());

app.use('/', userRouter);
// app.use('/', userRouter);
// app.use('/', userRouter);


app.get("/", (req, res) => {
	``;
	res.send("Welcome to Wheather App");
});



app.listen(port, async () => {
	try {
		await connection;
		console.log("mongodb connected...");
	} catch (error) {
		console.log("Error connecting to database");
	}
	console.log("Server running on port http://localhost:3000");
});
