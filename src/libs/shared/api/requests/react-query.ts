// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, useSuspenseQuery, useInfiniteQuery, useSuspenseInfiniteQuery, UseMutationOptions, UseQueryOptions, UseSuspenseQueryOptions, UseInfiniteQueryOptions, InfiniteData, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
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
  TypeDocuments: Array<TypeDocument>;
  countries: Array<Country>;
  healthCheck: Scalars['String']['output'];
};

export type TypeDocument = {
  NameTypeDocument: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type UserDocument = {
  DateExpedition: Scalars['String']['output'];
  Document: Scalars['String']['output'];
  PlaceExpedition: Scalars['String']['output'];
  typeDocument: TypeDocument;
};

export type AppUserFieldsFragment = { id: string, Name: string, LastName: string, username: string, email?: string | null, IsMilitar: boolean, isTemporal: boolean, TimeCreate: any, document: { Document: string, PlaceExpedition: string, DateExpedition: string, typeDocument: { NameTypeDocument: string } }, contact?: { Address: string, City: string, Phone: string, CelPhone: string, EmergencyName: string, EmergencyPhone: string, country: { CountryCode: string, CountryName: string } } | null };

export type ContactFieldFragment = { Address: string, City: string, Phone: string, CelPhone: string, EmergencyName: string, EmergencyPhone: string, country: { CountryCode: string, CountryName: string } };

export type DocumentFieldFragment = { Document: string, PlaceExpedition: string, DateExpedition: string, typeDocument: { NameTypeDocument: string } };

export type RegisterUserMutationVariables = Exact<{
  input: CreateAppUserDto;
}>;


export type RegisterUserMutation = { registerUser: { id: string, Name: string, LastName: string, username: string, email?: string | null, IsMilitar: boolean, isTemporal: boolean, TimeCreate: any, document: { Document: string, PlaceExpedition: string, DateExpedition: string, typeDocument: { NameTypeDocument: string } }, contact?: { Address: string, City: string, Phone: string, CelPhone: string, EmergencyName: string, EmergencyPhone: string, country: { CountryCode: string, CountryName: string } } | null } };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { countries: Array<{ id: string, CountryCode: string, CountryName: string }> };

export type GetDocumentTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDocumentTypesQuery = { TypeDocuments: Array<{ id: string, NameTypeDocument: string }> };


export const DocumentFieldFragmentDoc = `
    fragment DocumentField on UserDocument {
  Document
  PlaceExpedition
  DateExpedition
  typeDocument {
    NameTypeDocument
  }
}
    `;
export const ContactFieldFragmentDoc = `
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
export const AppUserFieldsFragmentDoc = `
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
    `;
export const RegisterUserDocument = `
    mutation RegisterUser($input: CreateAppUserDto!) {
  registerUser(input: $input) {
    ...AppUserFields
  }
}
    ${AppUserFieldsFragmentDoc}
${DocumentFieldFragmentDoc}
${ContactFieldFragmentDoc}`;

export const useRegisterUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>(
      {
    mutationKey: ['RegisterUser'],
    mutationFn: (variables?: RegisterUserMutationVariables) => fetcher<RegisterUserMutation, RegisterUserMutationVariables>(client, RegisterUserDocument, variables, headers)(),
    ...options
  }
    )};


useRegisterUserMutation.fetcher = (client: GraphQLClient, variables: RegisterUserMutationVariables, headers?: RequestInit['headers']) => fetcher<RegisterUserMutation, RegisterUserMutationVariables>(client, RegisterUserDocument, variables, headers);

export const GetCountriesDocument = `
    query GetCountries {
  countries {
    id
    CountryCode
    CountryName
  }
}
    `;

export const useGetCountriesQuery = <
      TData = GetCountriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCountriesQueryVariables,
      options?: Omit<UseQueryOptions<GetCountriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCountriesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetCountriesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetCountries'] : ['GetCountries', variables],
    queryFn: fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, variables, headers),
    ...options
  }
    )};

useGetCountriesQuery.getKey = (variables?: GetCountriesQueryVariables) => variables === undefined ? ['GetCountries'] : ['GetCountries', variables];

export const useSuspenseGetCountriesQuery = <
      TData = GetCountriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCountriesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetCountriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetCountriesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useSuspenseQuery<GetCountriesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetCountriesSuspense'] : ['GetCountriesSuspense', variables],
    queryFn: fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, variables, headers),
    ...options
  }
    )};

useSuspenseGetCountriesQuery.getKey = (variables?: GetCountriesQueryVariables) => variables === undefined ? ['GetCountriesSuspense'] : ['GetCountriesSuspense', variables];

export const useInfiniteGetCountriesQuery = <
      TData = InfiniteData<GetCountriesQuery>,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCountriesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetCountriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetCountriesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useInfiniteQuery<GetCountriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['GetCountries.infinite'] : ['GetCountries.infinite', variables],
      queryFn: (metaData) => fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      ...restOptions
    }
  })()
    )};

useInfiniteGetCountriesQuery.getKey = (variables?: GetCountriesQueryVariables) => variables === undefined ? ['GetCountries.infinite'] : ['GetCountries.infinite', variables];

export const useSuspenseInfiniteGetCountriesQuery = <
      TData = InfiniteData<GetCountriesQuery>,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCountriesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<GetCountriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<GetCountriesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useSuspenseInfiniteQuery<GetCountriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['GetCountries.infiniteSuspense'] : ['GetCountries.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteGetCountriesQuery.getKey = (variables?: GetCountriesQueryVariables) => variables === undefined ? ['GetCountries.infiniteSuspense'] : ['GetCountries.infiniteSuspense', variables];


useGetCountriesQuery.fetcher = (client: GraphQLClient, variables?: GetCountriesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, variables, headers);

export const GetDocumentTypesDocument = `
    query GetDocumentTypes {
  TypeDocuments {
    id
    NameTypeDocument
  }
}
    `;

export const useGetDocumentTypesQuery = <
      TData = GetDocumentTypesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetDocumentTypesQueryVariables,
      options?: Omit<UseQueryOptions<GetDocumentTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetDocumentTypesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetDocumentTypesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetDocumentTypes'] : ['GetDocumentTypes', variables],
    queryFn: fetcher<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(client, GetDocumentTypesDocument, variables, headers),
    ...options
  }
    )};

useGetDocumentTypesQuery.getKey = (variables?: GetDocumentTypesQueryVariables) => variables === undefined ? ['GetDocumentTypes'] : ['GetDocumentTypes', variables];

export const useSuspenseGetDocumentTypesQuery = <
      TData = GetDocumentTypesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetDocumentTypesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetDocumentTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetDocumentTypesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useSuspenseQuery<GetDocumentTypesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetDocumentTypesSuspense'] : ['GetDocumentTypesSuspense', variables],
    queryFn: fetcher<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(client, GetDocumentTypesDocument, variables, headers),
    ...options
  }
    )};

useSuspenseGetDocumentTypesQuery.getKey = (variables?: GetDocumentTypesQueryVariables) => variables === undefined ? ['GetDocumentTypesSuspense'] : ['GetDocumentTypesSuspense', variables];

export const useInfiniteGetDocumentTypesQuery = <
      TData = InfiniteData<GetDocumentTypesQuery>,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetDocumentTypesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetDocumentTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetDocumentTypesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useInfiniteQuery<GetDocumentTypesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['GetDocumentTypes.infinite'] : ['GetDocumentTypes.infinite', variables],
      queryFn: (metaData) => fetcher<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(client, GetDocumentTypesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      ...restOptions
    }
  })()
    )};

useInfiniteGetDocumentTypesQuery.getKey = (variables?: GetDocumentTypesQueryVariables) => variables === undefined ? ['GetDocumentTypes.infinite'] : ['GetDocumentTypes.infinite', variables];

export const useSuspenseInfiniteGetDocumentTypesQuery = <
      TData = InfiniteData<GetDocumentTypesQuery>,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetDocumentTypesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<GetDocumentTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<GetDocumentTypesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useSuspenseInfiniteQuery<GetDocumentTypesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['GetDocumentTypes.infiniteSuspense'] : ['GetDocumentTypes.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(client, GetDocumentTypesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteGetDocumentTypesQuery.getKey = (variables?: GetDocumentTypesQueryVariables) => variables === undefined ? ['GetDocumentTypes.infiniteSuspense'] : ['GetDocumentTypes.infiniteSuspense', variables];


useGetDocumentTypesQuery.fetcher = (client: GraphQLClient, variables?: GetDocumentTypesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetDocumentTypesQuery, GetDocumentTypesQueryVariables>(client, GetDocumentTypesDocument, variables, headers);
