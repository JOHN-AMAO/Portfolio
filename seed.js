const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user1Id = "123456789012345678901234";
const user2Id = "567890123456789012345678";
const sessionToken1 = "token1token1token1token1";
const sessionToken2 = "token2token2token2token2";
const session1Id = "abcdef123456abcdef123456";

async function seedData() {
  try {
    // Create posts
    await prisma.post.createMany({
      data: [
        {
          title: "First Post",
          content: { text: "This is the content of the first post." },
          published: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: user1Id,
        },
        {
          title: "Second Post",
          content: { text: "This is the content of the second post." },
          published: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: user2Id,
        },
      ],
    });

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
