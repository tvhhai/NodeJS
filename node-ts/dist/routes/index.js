"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = __importDefault(require("./test"));
const apiRouter = (0, express_1.Router)();
apiRouter.use(test_1.default);
exports.default = apiRouter;
