/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogInMutationData
// ====================================================

export interface LogInMutationData_login {
  __typename: "User";
  id: string;
}

export interface LogInMutationData {
  login: LogInMutationData_login | null;
}

export interface LogInMutationDataVariables {
  email: string;
  password: string;
}
