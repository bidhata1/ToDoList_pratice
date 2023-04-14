const express = require('express');
const app = express();
app.use("/static",express.static("public"));

app.set("view engine", "ejs");
//get post
app.get('/',(req,res) => {
    res.render('todo.ejs');
});
app.use(express.urlencoded({ extended: true }));

//post method
app.post('/',(req, res) => {
    console.log(req.body);
    });
app.listen(3000,()=>console.log("server up and running"));
