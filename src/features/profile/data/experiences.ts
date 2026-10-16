import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "alta-sage",
    companyName: "ALTA School of Technology × Sage University",
    companyLogo:
      "https://api.dicebear.com/7.x/shapes/svg?seed=ALTA+School+of+Technology",
    positions: [
      {
        id: "btech-cse",
        title: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
        employmentPeriod: {
          start: "2026",
          end: "2030",
        },
        employmentType: "Currently Pursuing",
        icon: "education",
        isExpanded: true,
        description: `- First-year B.Tech CSE student at ALTA School of Technology in collaboration with Sage University, Indore.
- Core studies: Data Structures and Algorithms (DSA), Programming Fundamentals in C++, Object-Oriented Programming, and Computer Science fundamentals.
- Actively practicing daily coding and problem solving.`,
        skills: [
          "C++",
          "Python",
          "Data Structures",
          "Algorithms",
          "Problem Solving",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "garima-vidya-vihar-12",
    companyName: "Garima Vidya Vihar Sr. Sec. School",
    companyLogo:
      "https://api.dicebear.com/7.x/shapes/svg?seed=Garima+Vidya+Vihar",
    positions: [
      {
        id: "class-12",
        title: "Senior Secondary (Class XII) – CBSE",
        employmentPeriod: {
          start: "2025",
          end: "2026",
        },
        employmentType: "Completed",
        icon: "education",
        isExpanded: false,
        description: `- Completed Class XII under Central Board of Secondary Education (CBSE).`,
        skills: ["CBSE", "Mathematics", "Science", "Computer Science"],
      },
    ],
  },
  {
    id: "garima-vidya-vihar-10",
    companyName: "Garima Vidya Vihar Sr. Sec. School",
    companyLogo:
      "https://api.dicebear.com/7.x/shapes/svg?seed=Garima+Vidya+Vihar+X",
    positions: [
      {
        id: "class-10",
        title: "Secondary School (Class X) – CBSE",
        employmentPeriod: {
          start: "2023",
          end: "2024",
        },
        employmentType: "Completed",
        icon: "education",
        isExpanded: false,
        description: `- Completed Class X under Central Board of Secondary Education (CBSE) with strong foundations in Science and Mathematics.`,
        skills: ["CBSE", "Mathematics", "Science"],
      },
    ],
  },
];
