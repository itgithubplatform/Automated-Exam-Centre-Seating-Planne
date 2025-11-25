import { prisma } from '@/lib/services/database';
import bcrypt from 'bcryptjs';

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@examplanner.com' },
    update: {},
    create: {
      email: 'admin@examplanner.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Create staff user
  const staffPassword = await bcrypt.hash('staff123', 10);
  const staff = await prisma.user.upsert({
    where: { email: 'staff@examplanner.com' },
    update: {},
    create: {
      email: 'staff@examplanner.com',
      name: 'Staff User',
      password: staffPassword,
      role: 'STAFF',
    },
  });

  console.log('✅ Admin user created:', admin.email);
  console.log('✅ Staff user created:', staff.email);
  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });