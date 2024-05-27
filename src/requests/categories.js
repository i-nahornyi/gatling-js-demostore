import { http } from "@gatling.io/http"
import { exec, jmesPath } from "@gatling.io/core";


const list =
    http("GET_/api/category")
        .get("/api/category")
        .check(jmesPath("[? id == `6`].name").ofList().is(["For Her"]))

        
const update =
    http("PUT_/api/category/{categoryId}")
        .put("/api/category/#{categoryId}")
        // .headers(auth)
        // .headers()
        // .body()
        // .check(jmesPath("name").isEL("#{categoryName}"))

export { list, update}