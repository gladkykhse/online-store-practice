import mongoose from "mongoose"


mongoose.connect("mongodb+srv://root:root@online-store.jtxbq.mongodb.net/StoreData?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log(err))


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


const Products = mongoose.model("products", productSchema)

export default Products