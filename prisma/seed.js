import { prismaClient } from '../src/database/dbConfig.js';
import bcrypt from 'bcrypt';

const prisma = prismaClient;

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  await prisma.users.createMany({
    data: [
      {
        id: 'USR001',
        nama: 'Admin King of Birds',
        email: 'admin@kingofbirds.com',
        password_hash: hashedPassword,
        role: 'admin',
        no_telp: '081234567890',
      },
      {
        id: 'USR002',
        nama: 'Budi Santoso',
        email: 'budi@gmail.com',
        password_hash: hashedPassword,
        role: 'peserta',
        no_telp: '082345678901',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());