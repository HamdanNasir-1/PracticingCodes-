// Create Operation in MongoDB
use("newDB");


db.createCollection("peoples")

db.peoples.insertMany([
    {
  name: "hamdan",
  age: 22,
  height: 5.5
},

{
  name: "ali",
  age: 24,
  height: 5.8
},

{
  name: "sara",
  age: 21,
  height: 5.4
},

{
  name: "rahul",
  age: 23,
  height: 5.7
},

{
  name: "ayesha",
  age: 20,
  height: 5.3
},

{
  name: "faizan",
  age: 25,
  height: 5.9
},

{
  name: "neha",
  age: 22,
  height: 5.6
},

{
  name: "imran",
  age: 26,
  height: 5.8
},

{
  name: "pooja",
  age: 21,
  height: 5.4
},

{
  name: "arjun",
  age: 24,
  height: 5.10
}

])

// let a = db.peoples.find({name:"neha"});
// console.log(a);
// let b = db.peoples.findOne({name:"neha"});

// console.log(b)

db.peoples.updateMany({name:"neha"},{$set:{name:"sneha"}});
let a = db.peoples.find({name:"sneha"});
console.log(a.count());