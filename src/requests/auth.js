import { jmesPath, StringBody } from "@gatling.io/core"
import { http } from "@gatling.io/http"


const auth = 
    http("POST_/api/authenticate")
    .post("/api/authenticate")
    .body(StringBody("{\"username\": \"admin\",\"password\": \"admin\"}"))
    .asJson()
    .check(jmesPath("token").saveAs("jwt"))


export { auth }