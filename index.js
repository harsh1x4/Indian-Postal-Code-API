const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;
const apiData = require("./indiaPincode.json")

app.use(cors())


app.get("/", (req, res) => {
    res.send("Indian PinCode API")
});

// app.get("/pincode", (req, res) => {
//     res.send(apiData)
// });

app.get("/pincode", (req, res) => {
    const {Pincode} = req.query;
    let results = [...apiData];
    if (Pincode) {
        results = results.filter(r => +r.Pincode === +Pincode);
    }
    res.json(results);
});

app.listen(port, ()=>{
    console.log("Namaste from terminal")
})


// http://localhost:3000/pincode?Pincode=828112


