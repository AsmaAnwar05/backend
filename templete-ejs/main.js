const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  let siteName="Adidas"
  let searchText="Search here"
  let arr=["economics", "Computer Science", "English", "Law"]
  res.render("index", { siteName: siteName, searchText: searchText,arr})
})
// serve the same view at /req so requests to /req show the updated template
app.get('/req', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search here"
  let arr = ["economics", "Computer Science", "English", "Law"]
  res.render('index', { siteName: siteName, searchText: searchText, arr })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
