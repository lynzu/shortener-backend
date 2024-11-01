"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var app_ts_1 = require("./app.ts");
var port = 8080;
console.log("Server is running on http://localhost:".concat(port));
(0, node_server_1.serve)({
    fetch: app_ts_1.default.fetch,
    port: port
});
