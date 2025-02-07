"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
function loadAndValidadeEnv(envName) {
    const env = process.env[envName];
    if (!env) {
        throw new Error(`Environment variable ${envName} is required`);
    }
    return env;
}
exports.envs = {
    port: loadAndValidadeEnv('PORT'),
    mongoUrl: loadAndValidadeEnv('MONGO_URL'),
    mailUser: loadAndValidadeEnv('MAIL_USER'),
    mailPassword: loadAndValidadeEnv('MAIL_PASSWORD'),
    secret: loadAndValidadeEnv('SECRET'),
};
