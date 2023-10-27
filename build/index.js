"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.json());
const notesRoutes_1 = __importDefault(require("./notesRoutes/notesRoutes"));
app.use('/notes', notesRoutes_1.default);
app.listen(3600, () => {
    console.log("Server running on port 3600");
});
