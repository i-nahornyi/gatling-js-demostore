import { doIf, doIfEquals, exec, pause, repeat } from "@gatling.io/core"
import testConfig from "./config"
import { auth } from "./requests/auth"

import * as Categories from "./requests/categories";
import * as Products from "./requests/products"
import { extractProductInfo, printSessionValue, printFullSession } from "./utils";


const initSession = exec(session => session.set("authenticated", false));


const priceScrapper = exec(
    Categories.list,
    pause(testConfig.MIN_PAUSE, testConfig.MAX_PAUSE),
    Products.listAll,
)

const priceUpdater = exec(
    initSession,
    // printSessionValue("authenticated"),
    Products.listAll,
    pause(testConfig.MIN_PAUSE, testConfig.MAX_PAUSE),
    repeat("#{allProductsList.size()}", "productIndex").on(
        extractProductInfo,
        pause(testConfig.MIN_PAUSE),
        doIf(session => !session.get("authenticated")).then(
            auth,
            exec(session => session.set("authenticated", true)),
        ),
        Products.update
    )
)


export { priceScrapper, priceUpdater }