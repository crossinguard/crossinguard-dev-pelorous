export const projectCollections = {
  projectsCreativeClub: {
    name: "Creative Club",
    path: "creative-club",
    description:
      "Each month my wife's family and I pick a theme and each make a creative project based on the theme. These are my submissions.",
  },
  projectsWebDev: {
    name: "Web Development",
    path: "web-dev",
    description:
      "A collection of web development projects including personal sites, tools, and experiments.",
  },
  projectsAssessment: {
    name: "Assessment",
    path: "assessment",
    description:
      "Tools and resources for modern assessment development, item authoring, and educational measurement.",
  },
  projectsMathEd: {
    name: "Math Education",
    path: "math-ed",
    description:
      "Mathematics education projects, teaching resources, and educational tools.",
  },
  projectsData: {
    name: "Data",
    path: "data",
    description: "Data analysis, visualization, and data science projects.",
  },
} as const;

export type ProjectCollectionKey = keyof typeof projectCollections;

// Define display order and limit for the projects landing page
export const projectsPageConfig: Array<{
  key: ProjectCollectionKey;
  limit?: number;
}> = [
  { key: "projectsWebDev", limit: 6 },
  { key: "projectsAssessment", limit: 6 },
  { key: "projectsMathEd", limit: 6 },
  { key: "projectsCreativeClub", limit: 6 },
];
