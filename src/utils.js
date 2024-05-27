import { exec } from "@gatling.io/core";

const extractProductInfo = exec(session => {
    let index = session.get("productIndex")
    let product = session.get("allProductsList").get(index)

    return session
        .set("productCategoryId", product.get("categoryId"))
        .set("productName", product.get("name"))
        .set("productDescription", product.get("description"))
        .set("productImage", product.get("image"))
        .set("productPrice", product.get("price"))
        .set("productId", product.get("id"))
})

function printSessionValue(sessionKey) {
    return exec(session => {
        console.log(`${sessionKey} ====> ` + session.get(sessionKey))
        return session
    })
}

function printFullSession() {
    return exec(session => {
        console.log(session)
        return session
    })
}



export { extractProductInfo, printSessionValue, printFullSession }