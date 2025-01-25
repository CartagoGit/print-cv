import type { ComputedRef } from "vue";
import { tOpenProjects } from "../helpers/traductor.helper";

interface IOpenProjectsData {
  name: string;
  repository?: string;
  npm?: string;
  dependency?: string;
  install?: string;
  description: ComputedRef<string> | string;
  shortDescription: ComputedRef<string> | string;
}

export const OPEN_PROJECTS_DATA: IOpenProjectsData[] = [
  {
    name: "Keyer",
    repository: "https://github.com/CartagoGit/Keyer/",
    npm: "https://www.npmjs.com/package/@cartago-git/keyer",
    dependency: "@cartago-git/keyer",
    install: "npm i @cartago-git/keyer",
    description: tOpenProjects({ key: "DESCRIPTION", project: "KEYER" }),
    shortDescription: tOpenProjects({
      key: "SHORT_DESCRIPTION",
      project: "KEYER",
    }),
  },
  {
    name: "Docker images",
    repository: "https://hub.docker.com/u/cartagodocker",
    dependency: "hub.docker.com/u/cartagodocker",
    description: tOpenProjects({
      key: "DESCRIPTION",
      project: "DOCKER_IMAGES",
    }),
    shortDescription: tOpenProjects({
      key: "SHORT_DESCRIPTION",
      project: "DOCKER_IMAGES",
    }),
  },
];
