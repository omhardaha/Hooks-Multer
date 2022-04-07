const express = require("express");
const fs = require("fs");
const app = express();
const multer = require("multer");
app.use(express.json());

// const upload = multer({ dest: "/uploads" });

const upload = multer({ dest: "uploads/" });

app.post("/post", upload.single("avatar"), (req, res) => {
	const fileType = req.file.mimetype.split("/")[1];
	const compleFileName = req.file.filename + "." + fileType;
	console.log(compleFileName);
	fs.rename("uploads/" + req.file.filename, compleFileName, (err) => {
		if (err) {
			console.log(err);
		}
	});
	res.status(200).json(req.body.test);
});
app.get("/", (req, res) => {
	res.status(200).json("Welcome boy");
});

app.listen("5000", () => {
	console.log("server is Running 5000");
});
