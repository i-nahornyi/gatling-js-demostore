import { scenario, rampUsers, simulation, randomSwitch, percent } from "@gatling.io/core";
import * as ScenarioFlow from "./test_fragment";
import testConfig from "./config";


export default simulation((setUp) => {

    const perfScenario =
        scenario("demostore-js")
            .during(testConfig.TEST_DURATION).on(
                randomSwitch().on(
                    percent(60.0).then(ScenarioFlow.priceScrapper),
                    percent(40.0).then(ScenarioFlow.priceUpdater)
                )
            )

    setUp(perfScenario.injectOpen(rampUsers(testConfig.VUSERS).during(testConfig.TEST_DURATION))).protocols(testConfig.HTTP_CLIENT)
});