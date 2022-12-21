"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class DB {
    constructor() {
        DB.client = new client_1.PrismaClient();
        try {
            DB.client.$connect();
        }
        catch (error) {
            throw (error);
        }
    }
    static getInstance() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance;
    }
}
exports.default = DB;
