import { useCallback, useState } from 'react'
import { PaginatedRequestParams, PaginatedResponse, Transaction } from "../utils/types"
import { PaginatedTransactionsResult } from "./types"
import { useCustomFetch } from "./useCustomFetch"


export function usePaginatedTransactions(): PaginatedTransactionsResult {
  const { fetchWithCache, loading } = useCustomFetch()
  const [paginatedTransactions, setPaginatedTransactions] = useState<PaginatedResponse<
    Transaction[]
  > | null>(null)
  const [hasMore, setHasMore] = useState(true); // Track if there are more transactions to load

  const fetchAll = useCallback(async () => {
    const response = await fetchWithCache<PaginatedResponse<Transaction[]>, PaginatedRequestParams>(
      "paginatedTransactions",
      {
        page: paginatedTransactions === null ? 0 : paginatedTransactions.nextPage,
      }
    )

    // setPaginatedTransactions((previousResponse) => {

    //   if (response === null) {
    //     setHasMore(false); // No more transactions to load
    //     return previousResponse;
    //   }

    //   if (previousResponse === null) {
    //     setHasMore(response.data.length > 0); // Check if there are more transactions to load
    //     return response;
    //   }
    //   if (response === null || previousResponse === null) {
    //     return response
    //   }

    //   return {    
    //     data: [...previousResponse.data, ...response.data],
    //     nextPage: response.nextPage, }
    // })

    // Check if there are more transactions to load
    setPaginatedTransactions((previousResponse) => {
      if (previousResponse === null) {
        return response;
      }

      return {
        data: [...previousResponse.data, ...response.data],
        nextPage: response.nextPage,
      };
    });

    // Check if there are more transactions to load
    setHasMore(response.nextPage !== null);
  }, [fetchWithCache, paginatedTransactions]);

  const invalidateData = useCallback(() => {
    setPaginatedTransactions(null)
    setHasMore(true); // Reset hasMore when data is invalidated
  }, [])

  return { data: paginatedTransactions, loading, fetchAll, invalidateData, hasMore }
}
