const AWS = require('aws-sdk');
const AXIOS = require('axios');
require('dotenv').config();

// Use the aws script: <script src="https://cdnjs.cloudflare.com/ajax/libs/aws-sdk/2.1043.0/aws-sdk.min.js"></script>

// Then use this to get the information

// s3.getObject(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else {
//         const blob = new Blob([data.Body], { type: data.ContentType });
//         const imageUrl = URL.createObjectURL(blob);
//         document.getElementById('yourImageElementId').src = imageUrl;
//     }
// });


const S3 = new AWS.S3({
    region:"us-east-2",
    accessKeyId: process.env.S3ACCESSKEY,
    secretAccessKey: process.env.S3SECRET
})

const params = {
    Bucket: "officehours3",
    Key: "burning-town.png"
}



const toBase64 = async () => {
    let imageBytes = await S3.getObject(params,(err, data) => {

        if (err)  {
            console.log(err, err.stack);
        } else     {return data.Body }// an error occurred
    })

    await console.log(imageBytes);

        return await btoa(imageBytes.reduce((data, byte) => data + String.fromCharCode(byte), ''))
}

console.log(toBase64());



