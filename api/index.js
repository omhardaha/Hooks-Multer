const express = require("express");
const fs = require("fs");
const app = express();
const multer = require("multer");
app.use(express.json());
// app.use("/static",express.static('uploads'));
app.use("/static", express.static("uploads"));

const upload = multer({ dest: "uploads/" });

app.post("/post", upload.single("avatar"), (req, res) => {
	const fileType = req.file.mimetype.split("/")[1];
	const compleFileName = req.file.filename + "." + fileType;
	console.log(req.file);
	console.log(compleFileName);
	fs.rename(
		"uploads/" + req.file.filename,
		"uploads/" + compleFileName,
		(err) => {
			if (err) {
				console.log(err);
			}
		}
	);
	res.status(200).json(`http://localhost:5000/static/${compleFileName}`);
});
app.get("/", (req, res) => {
	res.status(200).json("Welcome boy");
});

app.listen("5000", () => {
	console.log("server is Running 5000");
});
