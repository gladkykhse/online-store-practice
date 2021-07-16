
const getResponse = async (url) => {
    const response = await fetch('/data')
    return await response.json()
}

getResponse("http://localhost:3000/data").then((data) => {
    console.log(data)
})
