import MyTripHorizonBoxLayout from '@/components/MyTripHorizonBoxLayout'
import { useMyTrip } from '@/hooks/myTrip/useMyTrip'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { palette } from '@/styles/palette'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import HostTripIconBtns from './HostTripIconBtns'
import RoundedImage from '@/components/designSystem/profile/RoundedImage'

import { IMyTripList } from '@/model/myTrip'

import { daysAgo } from '@/utils/time'
import { isGuestUser } from '@/utils/user'
import LoginButtonForGuest from '@/components/LoginButtonForGuest'

export default function HostTrip() {
  const [ref, inView] = useInView()
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useMyTrip()
  useInfiniteScroll(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage()
    }
  }, [inView, !isFetching, fetchNextPage, hasNextPage])

  const trips = (data?.pages[0].content as IMyTripList['content']) ?? []

  const isNoData = trips.length === 0

  return (
    <Container isNodata={isNoData}>
      {isNoData && (
        <Empty>
          <RoundedImage
            size={80}
            src="/images/noData.png"
          />
          <NoData>
            {isGuestUser() ? (
              <>
                로그인 후 <br />
                설레는 여행을 만들어 보세요
                <LoginButtonForGuest />
              </>
            ) : (
              <>
                아직 만든 여행이 없어요 <br /> 지금 첫 여행 게시글을 등록해
                볼까요?
              </>
            )}
          </NoData>
        </Empty>
      )}
      {!isLoading &&
        data &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.content?.map(
              ({
                travelNumber,
                location,
                userName,
                title,
                tags,
                maxPerson,
                createdAt,
                registerDue,
                bookmarked,
                nowPerson
              }) => (
                <BoxContainer key={travelNumber}>
                  <Link to={`/trip/detail/${travelNumber}`}>
                    <MyTripHorizonBoxLayout
                      travelNumber={travelNumber}
                      location={location}
                      userName={userName}
                      title={title}
                      tags={tags}
                      total={maxPerson}
                      daysAgo={daysAgo(createdAt)}
                      daysLeft={dayjs(registerDue, 'YYYY-MM-DD').diff(
                        dayjs().startOf('day'),
                        'day'
                      )}
                      recruits={nowPerson}
                      bookmarked={bookmarked}
                    />
                  </Link>
                  <HostTripIconBtns
                    travelNumber={travelNumber}
                    bookmarked={bookmarked}
                  />
                </BoxContainer>
              )
            )}
          </React.Fragment>
        ))}
      <div
        ref={ref}
        css={{ height: 80 }}
      />
    </Container>
  )
}
const NoData = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  letter-spacing: -0.025em;
  text-align: center;
  color: ${palette.기본};
`
const Empty = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100svh;
`
const Container = styled.div<{ isNodata: boolean | undefined }>`
  padding: 0 24px;
  position: relative;
  display: ${props => (props.isNodata ? 'flex' : 'auto')};
  justify-content: center;
  align-items: center;
`
const BoxContainer = styled.div`
  padding: 11px 16px;
  gap: 8px;
  border-radius: 20px;
  opacity: 0px;
  box-shadow: 0px 2px 4px 3px #aaaaaa14;

  margin-bottom: 16px;
  background-color: ${palette.BG};
  position: relative;
`
