import Products from "./schema.js"

export function createProduct(data) {
    for (let i = 0; i < data["products"].length; i++) {
        Products.create(data["products"][i])
            .then((data) => { return data })
            .catch((err) => { return err })
    }
}

export function getProducts() {
    return Products.find()
        .then((data) => {
            let resData = { products: [] }
            for (let i = 0; i < data.length; i++)
            {
                resData["products"].push(data[i])
            }
            return resData
        })
        .catch((err) => { return err })
}

export async function deleteProduct(filter) {
    const res = await Products.remove(filter)
    return res.deletedCount // Number of documents removed
}