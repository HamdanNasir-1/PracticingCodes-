use("newDB");

db.createCollection("NewPeoples");

db.NewPeoples.insertOne({
    name:"The Greate Papa",
    age:22
})

let a = db.NewPeoples.find({name:"The Greate Papa"});
console.log(a.toArray());