//Route controller

import path from "path";
import globby from "globby";
import express from "express";

export let routes = async (routesPath) => {
    const routesPathResolve = path.join(process.cwd(), routesPath);
    const router = express.Router();

    await globby([`${routesPathResolve}/*.js`, `${routesPathResolve}/**/*.js`]).then((paths) => {
        paths.forEach((routePath) => {
            var routeRequest = require(path.resolve(routePath));

            if(typeof routeRequest == "function")
                routeRequest(router);
            else if(typeof routeRequest.default == "function")
                routeRequest.default(router);
        });

        return true;
    });

    return router;
}
