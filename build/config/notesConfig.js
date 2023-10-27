"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesSqlConfig = void 0;
require('dotenv').config();
exports.notesSqlConfig = {
    user: "sa",
    password: "Michael123.100#",
    database: "notes",
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
};
