import { http } from "@gatling.io/http"

const testConfig = {
    MIN_PAUSE: { amount: 500, unit: "milliseconds" },
    MAX_PAUSE: { amount: 5, unit: "seconds" },

    VUSERS: 5,
    RAMP_DURATION: { amount: 30, unit: "seconds" },
    TEST_DURATION: { amount: 60, unit: "seconds" },

    AUTH_HEADER: { "authorization": "Bearer #{jwt}" },

    HTTP_CLIENT: http
        .baseUrl("https://demostore.gatling.io/")
        .acceptHeader("application/json")
}


export default testConfig