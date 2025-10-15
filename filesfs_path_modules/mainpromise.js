import fs from "fs/promises"
let a=await fs.readFile("hello2.txt")
console.log(a.toString())
let b=await fs.appendFile("hello2.txt","hello from promise2\n")
console.log("file written")
