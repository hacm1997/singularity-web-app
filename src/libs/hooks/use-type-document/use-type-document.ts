import { gqlClient } from "@/libs/shared/api/client/interceptor";
import {
  TypeDocument,
  useGetDocumentTypesQuery,
} from "@/libs/shared/api/requests/react-query";
import React from "react";

export const useTypeDocument = () => {
  const { data, refetch } = useGetDocumentTypesQuery(
    gqlClient,
    {},
    {
      refetchOnWindowFocus: false,
    }
  );

  const refetchTypeDocument = React.useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    typesDocuments: data?.TypeDocuments as TypeDocument[],
    refetch: refetchTypeDocument,
  };
};
