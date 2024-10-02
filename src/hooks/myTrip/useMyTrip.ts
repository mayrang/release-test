import { deleteMyApplyTrips, getApplyTrips, getMyTrips } from '@/api/myTrip'
import { ITripList } from '@/model/trip'
import { authStore } from '@/store/client/authStore'
import {
  useMutation,
  useQueryClient,
  useQuery,
  useInfiniteQuery,
  InfiniteData
} from '@tanstack/react-query'

export const useMyTrip = () => {
  const { accessToken } = authStore()

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    refetch,
    isFetching,
    hasNextPage
  } = useInfiniteQuery<
    ITripList,
    Object,
    InfiniteData<ITripList>,
    [_1: string]
  >({
    queryKey: ['myTrips'],
    queryFn: ({ pageParam }) => {
      return getMyTrips(pageParam as number, accessToken!)
    },

    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (lastPage?.page?.number + 1 === lastPage?.page?.totalPages) {
        return undefined
      } else {
        return lastPage?.page?.number + 1
      }
    }
  })

  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    refetch,
    isFetching,
    hasNextPage
  }
}
