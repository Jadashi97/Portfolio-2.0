
import pageInfo from './schemas/pageInfo';
import skill from './schemas/skill';
import experience from './schemas/experience';
import social from "./schemas/social";
import projects from "./schemas/projects"



export const schema = {
  types: schemaTypes.concat([
    pageInfo,
    skill,
    experience,
    social,
    projects
  ]),
}
