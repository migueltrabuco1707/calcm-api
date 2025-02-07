"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)(); // Não é necessário tipar explicitamente como express.Express
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.status(200).json({ message: 'Calcm API is running' });
});
