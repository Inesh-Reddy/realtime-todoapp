export enum StatusEnum {
  Not_Started = "Not_Started",
  In_Progress = "In_Progress",
  Completed = "Completed",
}

export const StatusValues = Object.values(StatusEnum);
export type Status = (typeof StatusValues)[number];

// export namespace StatusModule {
//   export type Type = Status;
// }

// export default StatusModule;
