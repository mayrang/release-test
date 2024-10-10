import CommunityComment from '@/components/community/CommunityComment'
import CommunityHeader from '@/components/community/CommunityHeader'
import CommunityPost from '@/components/community/CommunityPost'
import styled from '@emotion/styled'

const DetailCommunity = () => {
  return (
    <Container>
      <CommunityPost />
      <CommunityComment />
    </Container>
  )
}

const Container = styled.div`
  padding: 0 24px;
`

export default DetailCommunity
