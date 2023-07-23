
import pageInfo from './schemas/pageInfo';
import experience from "./schemas/experience";
import project from "./schemas/project";
import skill from "./schemas/skill";
import social from "./schemas/social";

export const schema = {
  name: "default",
  types: [pageInfo, experience, project, skill, social],
}
