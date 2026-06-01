import { prismaClient } from "./src/database/dbConfig.js";

console.log('prismaClient:', prismaClient ? '✅ Ada' : '❌ Tidak ada');
console.log('Type:', typeof prismaClient);