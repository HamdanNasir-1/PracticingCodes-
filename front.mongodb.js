use("newDB");

db.createCollection("NewPeoples");

db.NewPeoples.insertOne({
    name:"The Greate Papa",
    age:22
})

let a = db.NewPeoples.find({age:22});
console.log(a);