# @dekproject/routes

Express route controller for DEK

## Install

```js
import express from "express";
import dotenv from "dotenv";

import { $, plugins, controllers } from "@dekproject/scope";
import routes from "@dekproject/routes";

(async () => {
    dotenv.config(); //Load .env

    $.set("app", express());
    $.app.use(await routes(process.env.ROUTES_PATH || "src/routes"));

    const PORT = process.env.PORT || 5555;

    $.app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})();
```

src/routes/index.js
```js
export default async (router) => {
    router.get('/', (req, res) => {
        res.send("Hello World").end();
    });
}
```
