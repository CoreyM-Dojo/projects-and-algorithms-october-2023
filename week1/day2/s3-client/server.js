const AWS = require("aws-sdk");
const AXIOS = require("axios");
const EXPRESS = require('express')
const app = new EXPRESS();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
require("dotenv").config();

// Use the aws script: <script src="https://cdnjs.cloudflare.com/ajax/libs/aws-sdk/2.1043.0/aws-sdk.min.js"></script>

// Then use this to get the information

const S3 = new AWS.S3({
	region: "us-east-2",
	accessKeyId: process.env.S3ACCESSKEY,
	secretAccessKey: process.env.S3SECRET,
});

const params = {
	Bucket: "officehours3",
	Key: "burning-town.png",
};

const toBase64 = async () => {
	let imageBytes = await S3.getObject(params, function (err, data) {
		if (err) console.log(err, err.stack);
		else {
            console.log(data);
			let image = Buffer.from(data.Body).toString('base64');
            image = "data:"+"image/png"+";base64,"+image;
            app.get("", async (req,res) => {
                
                res.render(__dirname + "/public/index.html", {image:image});
            })
		}
	});
    return imageBytes;
};
toBase64();






app.listen(8000, () => console.log("Running on port 8000"));


