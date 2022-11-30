const express = require("express")
const path = require("path")
const PORT = 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
const createPath = (page) => path.resolve(__dirname, 'public', `${page}.html`)

app.get('/', function(req, res){
    res.render(createPath("index"))
})

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});

