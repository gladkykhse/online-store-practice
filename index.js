import express from "express"
import path from "path"


const app = express()
const PORT = process.env.PORT ?? 3000
const __dirname = path.resolve()


app.use(express.static(path.resolve(__dirname,"static")))


app.set("view engine","ejs")


app.get("/", (req, res) => {
    res.render("index",{title:"Main page"})
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})