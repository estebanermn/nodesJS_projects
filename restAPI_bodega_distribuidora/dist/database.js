"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const msnodesqlv8_1 = __importDefault(require("mssql/msnodesqlv8"));
const userName = 'LUCKYSAC\emedina';
const pass = '';
const serverName = '.';
const dbName = 'BodegaDistribuidoraDB';
var config = {
    server: serverName,
    database: dbName,
    authentication: {
        type: 'default',
        options: {
            userName: userName,
            password: pass,
        },
    },
    options: {
        enableArithAbort: true,
        encrypt: false,
        trustedConnection: true
    },
};
exports.connection = new msnodesqlv8_1.default.ConnectionPool(config).connect()
    .then((connectionPool) => {
    if (connectionPool.connected)
        console.log('Connection has been established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database: ', err);
});
//# sourceMappingURL=database.js.map