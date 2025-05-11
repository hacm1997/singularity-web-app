import { gqlClient } from "@/libs/shared/api/client/interceptor";
import {
  Country,
  useGetCountriesQuery,
} from "@/libs/shared/api/requests/react-query";
import React from "react";

export const useCountry = () => {
  const { data, refetch } = useGetCountriesQuery(
    gqlClient,
    {},
    {
      refetchOnWindowFocus: false,
    }
  );

  const refetchCountries = React.useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    countries: data?.countries as Country[],
    refetch: refetchCountries,
  };
};
