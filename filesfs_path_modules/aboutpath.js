import path from "path"
import { extname } from "path/posix"
console.log(path)

let mypath="E:/web-dev/node/files_fs -path modules/main.js"
console.log("basename:",path.basename(mypath))
console.log("dirname:",path.dirname(mypath))
console.log("extension name",path.extname(mypath))