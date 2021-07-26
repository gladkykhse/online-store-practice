import express from "express"
import path from "path"
import products from './static/product.json'
import {createProduct, getProducts, deleteProduct} from "./database/database.js"

const app = express()
const PORT = process.env.PORT ?? 3000
const __dirname = path.resolve()

app.use(express.static(path.resolve(__dirname,"static")))

app.set("view engine","ejs")

// await deleteProduct()

app.get("/", (req, res) => {
    res.render("index",{title:"Online Store", active: "index"})
})

app.get("/catalog", (req, res) => {
    res.render("catalog",{title:"Catalog", active: "catalog"})
})

app.get("/contacts", (req, res) => {
    res.render("contacts",{title:"Contacts", active: "contacts"})
})

app.get("/account", (req, res) => {
    res.render("account",{title:"Account", active: "account"})
})

app.get("/data", async (req, res) => {
    let dbData = await getProducts()
    res.send(dbData)
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})