"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../app");
describe('Test server instance', () => {
    test('Server must be running', async () => {
        const response = await (0, supertest_1.default)(app_1.app).get('/');
        expect(response.status).toBe(200);
        expect(typeof response.body.message).toBe('string');
    });
});
