export interface IOtp {
  status: string;
  statusCode: 0;
  otp: string;
}

export interface IUser {
    requestorProjectIds: [];
    auditorProjectIds: [];
    isManager: boolean;
    isAdmin: boolean;
  }
