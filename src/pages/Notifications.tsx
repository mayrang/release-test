import NotificationList from '@/components/notification/NotificationList'
import useNotification from '@/hooks/notification/useNotification'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Notifications = () => {
  const [ref, inView] = useInView()
  const { data, isLoading, refetch, fetchNextPage, hasNextPage, isFetching } =
    useNotification()
  useInfiniteScroll(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage()
    }
  }, [inView, !isFetching, fetchNextPage, hasNextPage])
  console.log(data)
  return (
    <>
      {!isLoading && data && (
        <>
          <NotificationList data={data} />
          <div
            ref={ref}
            css={{ height: 80 }}
          />
        </>
      )}
    </>
  )
}

export default Notifications
