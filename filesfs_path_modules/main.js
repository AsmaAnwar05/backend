const fs=require("fs")
console.log(fs)

console.log("starting")
// fs.writeFileSync("hello.txt","hello from nodejs")
fs.writeFile("hello2.txt","hello from nodejs",(err)=>{
    if (err) {
        console.error('writeFile error:', err)
        return
    }
    console.log("file written")
    fs.readFile("hello2.txt",(err,data)=>{
        if (err) {
            console.error('readFile error:', err)
            return
        }
        console.log(data.toString())
    })
})

fs.appendFile("asma.txt","asma is a good girl\n",(err)=>{
    if (err) {
        console.error('appendFile error:', err)
    } else {
        console.log('append completed')
    }
})
console.log("ending")