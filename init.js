const mongoose = require("mongoose");
const User = require("./model/chat.js");

main()
.then((res)=>{
    console.log("succesfully connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blw');
}

let userData = [
    {
    systemid : "DPC20243217",
    department : "Electronics",
    status : "Request Pending",
},
{
    systemid : "DPC20243218",
    department : "Mechanical",
    status : "Approved",
},
{
    systemid : "DPC20243219",
    department : "Civil",
    status : "rejected",
},
{
    systemid : "DPC20243220",
    department : "Electical",
    status : "Approved",
},
{
    systemid : "DPC20243221",
    department : "Machine engineering",
    status : "Approved",
},
{
    systemid : "DPC20243222",
    department : "Medical",
    status : "Request Pending",
},
{
    systemid : "DPC20243223",
    department : "TTC",
    status : "Request Pending",
},
{
    systemid : "DPC20243224",
    department : "Store",
    status : "rejected",
},
{
    systemid : "DPC20243225",
    department : "Personnel",
    status : "Request Pending",
},
{
    systemid : "DPC20243226",
    department : "safety",
    status : "Approved",
},

];

User.insertMany(userData);