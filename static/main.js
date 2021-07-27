
const getResponse = async (url) => {
    const response = await fetch('/data')
    return await response.json()
}

getResponse("http://localhost:3000/data").then((data) => {
    for (let i = 0; i < data["products"].length; i++)
    {
        let smallName = ""
        let smallDesc = ""

        if (data["products"][i]["name"].length > 18) {
            smallName = data["products"][i]["name"].slice(0,18) + "..."
        } else {
            smallName = data["products"][i]["name"]
        }

        if (data["products"][i]["description"].length > 105) {
            smallDesc = data["products"][i]["description"].slice(0,105) + "..."
        } else {
            smallDesc = data["products"][i]["description"]
        }



        document.getElementById("allProds").innerHTML += `<div id="prod"><div id="prodName">${smallName}</div><img src="images/test.png" id="prodImg" alt="productImage"><div id="prodDesc">${smallDesc}</div></div>`
    }
})





