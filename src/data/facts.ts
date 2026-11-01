
import { allProjects, featuredProjects } from "@/data/registry";

export const siteFacts = {
  engineersTrained: "100+",
  trainingRounds: 5,
  hoursPerRound: "90+",
  mvpDeliveryDays: allProjects.some((p) => p.slug === "mothooq") ? 14 : 0,
} as const;

export const shippedSystemsCount = featuredProjects.length;
