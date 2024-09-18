import styled from '@emotion/styled'
import TitleContainer from './ContentTitleContainer'
import VerticalBoxLayout from '@/components/VerticalBoxLayout'
import { useTripAvailable } from '@/hooks/useTripAvailable'
import useUser from '@/hooks/user/useUser'
import { userStore } from '@/store/client/userStore'

// 백 데이터 받아오면 수정.
interface TripsProps {
  postId: string
  imgUrl: string
  endDate: string
  title: string
  description: string
  createdDate: string
  tags: string[]
  recruits: number
  total: number
  userIdBookmarked: string[]
}
const TripAvailable = () => {
  const { data } = useTripAvailable()
  const { name } = userStore()
  const trips = data?.data
  // 일단 앞에 몇개만 노출.
  //   const cutTrips = trips.length > 5 ? trips.slice(0, 5) : trips
  console.log(trips)
  function calcDaysAgo(dateString: string) {
    const today = new Date()

    const targetDate = new Date(dateString)

    const timeDifference = today.getTime() - targetDate.getTime()

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference
  }

  function daysLeft(dateString: string) {
    const today = new Date()

    const targetDate = new Date(dateString)

    const timeDifference = targetDate.getTime() - today.getTime()

    // 밀리초를 일 수로 변환
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference
  }
  return (
    <Container>
      <TitleContainer
        text={'지금 참가 가능한 여행을 소개해요.'}
        width="145px"
      />
      <ContentBox>
        {trips &&
          trips.map((post: TripsProps) => (
            <Box key={post.postId}>
              <VerticalBoxLayout
                key={post.postId}
                userIdBookmarked={post.userIdBookmarked}
                postId={post.postId}
                daysLeft={daysLeft(post.endDate)}
                daysAgo={calcDaysAgo(post.createdDate)}
                title={post.title}
                description={post.description}
                userName={name}
                recruits={post.recruits}
                total={post.total}
                imgSrc={post.imgUrl}
                tags={post.tags}
              />
            </Box>
          ))}
      </ContentBox>
    </Container>
  )
}
export default TripAvailable

const Container = styled.div`
  margin-top: 40px;
`
const Box = styled.div`
  margin-right: 16px;
`
const ContentBox = styled.div`
  margin-top: 22px;
  display: flex;
  margin-right: -24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`
