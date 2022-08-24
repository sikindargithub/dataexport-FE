export interface Project {
  projectId: number;
  projectName: string;
  projectStatus: string;
  costInDollars: number;
  managerName: string;
  clientName: string;
  noOfResources: number;
  creationDate: Date;
  estimatedEndDate: Date;
  durationInMonths: number;
}
