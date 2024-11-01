"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
require("dotenv/config");
var app = new hono_1.Hono();
app.get('/', function (c) {
    return c.json({ status: 'success', message: 'Hi from me' });
});
exports.default = app;
