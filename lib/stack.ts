export type TechCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Cloud & Infrastructure"
  | "Databases"
  | "Tools & Design"
  | "AI & ML";

export interface TechItem {
  name: string;
  svg: string; 
}

export const techStack: Record<TechCategory, TechItem[]> = {
  Languages: [
    { name: "Python", svg: "/Python.png" },
    { name: "JavaScript", svg: "/JavaScript.png" },
    { name: "TypeScript", svg: "/TypeScript.png" }
  ],
  "Frameworks & Libraries": [
    { name: "Next.js", svg: "/Next.js.png" },
    { name: "Tailwind CSS", svg: "/Tailwind CSS.png" },
    { name: "React", svg: "/React.png" },
    { name: "React Native", svg: "/React.png" },
    { name: "Prisma", svg: "/Prisma.png" },
    { name: "Node.js", svg: "/Node.js.png" },
    { name: "Express.js", svg: "/Express.png" },
    { name: "Django", svg: "/Django.png" },
    { name: "FastAPI", svg: "/FastAPI.png" }
  ],
  "Cloud & Infrastructure": [
    { name: "Docker", svg: "/Docker.png" },
    { name: "Vercel", svg: "/Vercel.png" },
    { name: "Heroku", svg: "/Heroku.png" },
    { name: "AWS", svg: "/AWS.png" }
  ],
  Databases: [
    { name: "MongoDB", svg: "/MongoDB.png" },
    { name: "PostgreSQL", svg: "/PostgresSQL.png" }
  ],
  "Tools & Design": [
    { name: "Figma", svg: "/Figma.png" },
    { name: "Postman", svg: "/Postman.png" }
  ],
  "AI & ML": [
    { name: "OpenAI", svg: "/Openai.png" },
    { name: "Nvidia NIM", svg: "/Nvidia.png" },
    { name: "ElevenLabs", svg: "/Elevenlabs.png" },
    
  ]
}; 