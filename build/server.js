"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./util/env");
app_1.app.listen(env_1.envs.port, () => {
    console.log(`Server is running on port ${env_1.envs.port}`);
});
