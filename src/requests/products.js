import { http } from "@gatling.io/http"
import { ElFileBody, jmesPath } from "@gatling.io/core";
import testConfig from "../config";


const listAll =
    http("GET_/api/product")
        .get("/api/product")
        .check(jmesPath("[*]").ofList().saveAs("allProductsList"))


const update =
    http("PUT_/api/product/{productId}")
        .put("/api/product/#{productId}")
        .headers(testConfig.AUTH_HEADER)
        .body(ElFileBody("body/create-product.json"))
        .asJson()
        .check(jmesPath("price").isEL("#{productPrice}"));


const create =
    http("POST_/api/product")
        .post("/api/product")
        .headers(testConfig.AUTH_HEADER)
        .body(ElFileBody("body/create-product.json"))
        .asJson()


export { listAll, update, create }