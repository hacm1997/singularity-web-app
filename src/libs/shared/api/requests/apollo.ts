import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AppUser = {
  __typename?: 'AppUser';
  IsMilitar: Scalars['Boolean']['output'];
  LastName: Scalars['String']['output'];
  Name: Scalars['String']['output'];
  TimeCreate: Scalars['DateTime']['output'];
  contact?: Maybe<ContactInfo>;
  document: UserDocument;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isTemporal: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  Address: Scalars['String']['output'];
  CelPhone: Scalars['String']['output'];
  City: Scalars['String']['output'];
  CountryID: Scalars['Float']['output'];
  EmergencyName: Scalars['String']['output'];
  EmergencyPhone: Scalars['String']['output'];
  Phone: Scalars['String']['output'];
  UserID: Scalars['Float']['output'];
  country: Country;
  id: Scalars['ID']['output'];
};

export type Country = {
  __typename?: 'Country';
  CountryCode: Scalars['String']['output'];
  CountryName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CreateAppUserDto = {
  IsMilitar?: Scalars['Boolean']['input'];
  LastName: Scalars['String']['input'];
  Name: Scalars['String']['input'];
  contact: CreateContactInfoDto;
  document: CreateUserDocumentDto;
  email?: InputMaybe<Scalars['String']['input']>;
  isTemporal?: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateContactInfoDto = {
  Address: Scalars['String']['input'];
  CelPhone: Scalars['String']['input'];
  City: Scalars['String']['input'];
  CountryID: Scalars['Int']['input'];
  EmergencyName: Scalars['String']['input'];
  EmergencyPhone: Scalars['String']['input'];
  Phone: Scalars['String']['input'];
};

export type CreateCountryDto = {
  CountryCode: Scalars['String']['input'];
  CountryName: Scalars['String']['input'];
};

export type CreateTypeDocumentDto = {
  NameTypeDocument: Scalars['String']['input'];
};

export type CreateUserDocumentDto = {
  DateExpedition: Scalars['String']['input'];
  Document: Scalars['String']['input'];
  PlaceExpedition: Scalars['String']['input'];
  TypeDocumentID: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createContactInfo: ContactInfo;
  createCountry: Country;
  createTypeDocument: TypeDocument;
  createUserDocument: UserDocument;
  registerUser: AppUser;
};


export type MutationCreateContactInfoArgs = {
  input: CreateContactInfoDto;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryDto;
};


export type MutationCreateTypeDocumentArgs = {
  input: CreateTypeDocumentDto;
};


export type MutationCreateUserDocumentArgs = {
  input: CreateUserDocumentDto;
};


export type MutationRegisterUserArgs = {
  input: CreateAppUserDto;
};

export type Query = {
  __typename?: 'Query';
  TypeDocuments: Array<TypeDocument>;
  countries: Array<Country>;
  healthCheck: Scalars['String']['output'];
};

export type TypeDocument = {
  __typename?: 'TypeDocument';
  NameTypeDocument: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type UserDocument = {
  __typename?: 'UserDocument';
  DateExpedition: Scalars['String']['output'];
  Document: Scalars['String']['output'];
  PlaceExpedition: Scalars['String']['output'];
  typeDocument: TypeDocument;
};

export type AppUserFieldsFragment = { __typename?: 'AppUser', id: string, Name: string, LastName: string, username: string, email?: string | null, IsMilitar: boolean, isTemporal: boolean, TimeCreate: any, document: { __typename?: 'UserDocument', Document: string, PlaceExpedition: string, DateExpedition: string, typeDocument: { __typename?: 'TypeDocument', NameTypeDocument: string } }, contact?: { __typename?: 'ContactInfo', Address: string, City: string, Phone: string, CelPhone: string, EmergencyName: string, EmergencyPhone: string, country: { __typename?: 'Country', CountryCode: string, CountryName: string } } | null };

export type ContactFieldFragment = { __typename?: 'ContactInfo', Address: string, City: string, Phone: string, CelPhone: string, EmergencyName: string, EmergencyPhone: string, country: { __typename?: 'Country', CountryCode: string, CountryName: string } };

export type DocumentFieldFragment = { __typename?: 'UserDocument', Document: string, PlaceExpedition: string, DateExpedition: string, typeDocument: { __typename?: 'TypeDocument', NameTypeDocument: string } };

export type RegisterUserMutationVariables = Exact<{
  input: CreateAppUserDto;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AppUser', id: string, Name: string, LastName: string, username: string, email?: string | null, IsMilitar: boolean, isTemporal: boolean, TimeCreate: any, document: { __typename?: 'UserDocument', Document: string, PlaceExpedition: string, DateExpedition: string, typeDocument: { __typename?: 'TypeDocument', NameTypeDocument: string } }, contact?: { __typename?: 'ContactInfo', Address: string, City: string, Phone: string, CelPhone: string, EmergencyName: string, EmergencyPhone: string, country: { __typename?: 'Country', CountryCode: string, CountryName: string } } | null } };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', id: string, CountryCode: string, CountryName: string }> };

export type GetDocumentTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDocumentTypesQuery = { __typename?: 'Query', TypeDocuments: Array<{ __typename?: 'TypeDocument', id: string, NameTypeDocument: string }> };

export const DocumentFieldFragmentDoc = gql`
    fragment DocumentField on UserDocument {
  Document
  PlaceExpedition
  DateExpedition
  typeDocument {
    NameTypeDocument
  }
}
    `;
export const ContactFieldFragmentDoc = gql`
    fragment ContactField on ContactInfo {
  Address
  City
  Phone
  CelPhone
  EmergencyName
  EmergencyPhone
  country {
    CountryCode
    CountryName
  }
}
    `;
export const AppUserFieldsFragmentDoc = gql`
    fragment AppUserFields on AppUser {
  id
  Name
  LastName
  username
  email
  IsMilitar
  isTemporal
  TimeCreate
  document {
    ...DocumentField
  }
  contact {
    ...ContactField
  }
}
    ${DocumentFieldFragmentDoc}
${ContactFieldFragmentDoc}`;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: CreateAppUserDto!) {
  registerUser(input: $input) {
    ...AppUserFields
  }
}
    ${AppUserFieldsFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetCountriesDocument = gql`
    query GetCountries {
  countries {
    id
    CountryCode
    CountryName
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export function useGetCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesSuspenseQueryHookResult = ReturnType<typeof useGetCountriesSuspenseQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetDocumentTypesDocument = gql`
    query GetDocumentTypes {
  TypeDocuments {
    id
    NameTypeDocument
  }
}
    `;

/**
 * __useGetDocumentTypesQuery__
 *
 * To run a query within a React component, call `useGetDocumentTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDocumentTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(GetDocumentTypesDocument, options);
      }
export function useGetDocumentTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(GetDocumentTypesDocument, options);
        }
export function useGetDocumentTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(GetDocumentTypesDocument, options);
        }
export type GetDocumentTypesQueryHookResult = ReturnType<typeof useGetDocumentTypesQuery>;
export type GetDocumentTypesLazyQueryHookResult = ReturnType<typeof useGetDocumentTypesLazyQuery>;
export type GetDocumentTypesSuspenseQueryHookResult = ReturnType<typeof useGetDocumentTypesSuspenseQuery>;
export type GetDocumentTypesQueryResult = Apollo.QueryResult<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>;