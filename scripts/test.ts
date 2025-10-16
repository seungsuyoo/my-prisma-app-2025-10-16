import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('테스트 시작');

  const user = await prisma.user.create({
    data: {
      email: 'newuser@example.com',
      name: '새로운 유저',
      password: 'password123',
    },
  });

  console.log('테스트 종료');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
