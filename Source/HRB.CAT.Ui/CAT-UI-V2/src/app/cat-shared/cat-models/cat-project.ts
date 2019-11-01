export interface IProjectList {
  projects: IProject[];
}

export interface IProject {
  id: string;
  projectCode: string;
  projectId: number;
  projectName: string;
  userIdentifier: string;
  userRole: string;
}
