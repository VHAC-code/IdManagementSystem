const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./model/chat.js");
const methodOverride = require("method-override");



main()
.then((res)=>{
    console.log("succesfully connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blw');
}

// const chat = require("./models/chat.js");

let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/css2")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.listen(port, ()=>{
    console.log("app is listening to port 8080");

})

// app.get("/", (req,res)=>{
//     res.send("it is working");
// })

app.get("/", (req,res)=>{
    res.render("work");
})

app.get("/blw", async(req,res)=>{
    let users = await User.find();
    console.log(users);
    res.render("index.ejs", {users});
})

//new route
app.get("/blw/new", (req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/blw", (req,res)=>{
    let {systemid , department , status} = req.body;
    let newUser = new User({
        systemid : systemid,
        department : department,
        status : status,
    });
    // console.log(newUser);

    newUser.save()
    .then((res)=>{
        console.log("chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/blw");
})

//delete route

app.delete("/blw/:id" , async(req,res)=>{
    let {id} = req.params;
    let deletedInformation = await User.findByIdAndDelete(id);
    console.log(deletedInformation);
    res.redirect("/blw");
});

// Add this new route to handle search requests
app.get("/blw/search", (req, res) => {
    res.render("search.ejs");
});

app.post("/blw/search",async(req,res)=>{
    let {systemid} = req.body;
    let information = await User.findOne({systemid:systemid});
    // console.log(information);
    res.render("find.ejs", {information});
})
