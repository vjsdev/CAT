export interface IAuditList {
  audits: IAudit[];
}

export interface IAudit {
  auditId: number;
  auditName: string;
  auditScore: number;
  auditStatus: string;
  auditStatusMessage: string;
  auditorComment: string;
  generalRatings: IRating[];
  history: IHistory[];
  id: string;
  isLocked: boolean;
  observations: IRating[];
  projectId: number;
  requestorComment: string;
}

export interface IRating {
  comment: string;
  rating: number;
  title: string;
}

export interface IHistory {
  activityDetails: string;
  activityTime: string;
  origin: object;
}
