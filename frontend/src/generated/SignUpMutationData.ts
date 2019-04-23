/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUpMutationData
// ====================================================

export interface SignUpMutationData_register {
  __typename: "User";
  id: string;
}

export interface SignUpMutationData {
  register: SignUpMutationData_register;
}

export interface SignUpMutationDataVariables {
  email: string;
  password: string;
}
