import { useQuery, useQueryClient } from "@tanstack/react-query";

const useCustomQuery = (queryKey: any, queryFn: any) => {
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(queryKey);

  return cachedData;
};

export default useCustomQuery;
