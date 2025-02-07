"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../../util/env");
describe('Test environment variables', () => {
    test('Port must be defined', () => {
        expect(env_1.envs.port).toBeDefined();
        expect(env_1.envs.port).not.toBeNull();
        expect(typeof env_1.envs.port).toBe('string');
    });
    test('MongoDB url must be defined', () => {
        expect(env_1.envs.mongoUrl).toBeDefined();
        expect(env_1.envs.mongoUrl).not.toBeNull();
        expect(typeof env_1.envs.mongoUrl).toBe('string');
    });
    test('Mail user must be defined', () => {
        expect(env_1.envs.mailUser).toBeDefined();
        expect(env_1.envs.mailUser).not.toBeNull();
        expect(typeof env_1.envs.mailUser).toBe('string');
    });
    test('Mail password must be defined', () => {
        expect(env_1.envs.mailPassword).toBeDefined();
        expect(env_1.envs.mailPassword).not.toBeNull();
        expect(typeof env_1.envs.mailPassword).toBe('string');
    });
    test('Secret must be defined', () => {
        expect(env_1.envs.secret).toBeDefined();
        expect(env_1.envs.secret).not.toBeNull();
        expect(typeof env_1.envs.secret).toBe('string');
    });
});
