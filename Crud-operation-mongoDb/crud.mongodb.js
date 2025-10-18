use("CrudDb")
db.createCollection("users")
// db.users.insertOne({ 
//     name: "Alice", 
//     age: 30
// })
db.users.insertMany( [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carla", age: 28 },
  { name: "David", age: 35 },
  { name: "Eva", age: 22 },
  { name: "Farhan", age: 40 },
  { name: "Gina", age: 27 },
  { name: "Hasan", age: 31 },
  { name: "Isha", age: 24 },
  { name: "Jamal", age: 22 }
])
// let a=db.users.find({age:22})
// console.log(a.toArray())
// let b=db.users.findOne({age:22})
// console.log(b)
db.users.updateOne({age:30},{$set:{age:21}})
db.users.updateMany({age:22},{$set:{age:23}})
db.users.deleteOne({age:25})