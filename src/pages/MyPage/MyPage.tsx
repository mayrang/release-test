import Badge from '@/components/designSystem/Badge'
import BoxLayoutTag from '@/components/designSystem/BoxLayoutTag'
import RoundedImage from '@/components/designSystem/profile/RoundedImage'
import ResultToast from '@/components/designSystem/toastMessage/resultToast'
import ArrowIcon from '@/components/icons/ArrowIcon'
import RightVector from '@/components/icons/RightVector'
import Vector from '@/components/icons/Vector'

import useMyPage from '@/hooks/myPage/useMyPage'
import { ImyPage } from '@/model/myPages'
import { myPageStore } from '@/store/client/myPageStore'
import { palette } from '@/styles/palette'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyPage() {
  const { name, agegroup, email, preferredTags } = myPageStore()
  const navigate = useNavigate()

  const cutTags =
    preferredTags.length > 2 ? preferredTags.slice(0, 2) : preferredTags

  console.log(name, agegroup, email, preferredTags)
  return (
    <Container>
      <UserInfo>
        <ProfileImg>
          <RoundedImage
            size={80}
            src="/images/profileDefault.png"
          />
        </ProfileImg>
        <div css={{ width: '100%' }}>
          <MoreBox onClick={() => navigate('/editMyInfo')}>
            <UserName>{name}</UserName>
            <div css={{ display: 'flex', padding: '8px 5px' }}>
              {' '}
              <RightVector />
            </div>
          </MoreBox>
          <Email>{email}</Email>
          <Tags>
            <div css={{ marginRight: '8px' }}>
              <Badge
                isDueDate={false}
                fontWeight="600"
                color={palette.keycolor}
                backgroundColor={palette.keycolorBG}
                text={agegroup}
              />
            </div>

            {cutTags.map((text: string) => (
              <div css={{ marginRight: '8px' }}>
                <Badge
                  key={text}
                  isDueDate={false}
                  fontWeight="500"
                  color={palette.비강조}
                  backgroundColor="white"
                  text={text}
                />
              </div>
            ))}
            {preferredTags.length > cutTags.length ? (
              <Badge
                isDueDate={false}
                fontWeight="500"
                color={palette.비강조}
                backgroundColor="white"
                text={`+${preferredTags.length - cutTags.length}`}
              />
            ) : null}
          </Tags>
        </div>
      </UserInfo>

      <Menu>
        <Box>
          <Title>모잉 소식</Title>
          <SmallTitle>
            <img
              src="/images/createTripBtn.png"
              alt=""
            />
            공지사항
          </SmallTitle>
        </Box>
        <Box>
          <Title>내 여행 현황</Title>
          <SmallTitle onClick={() => navigate('/myTrip')}>
            <img
              src="/images/createTripBtn.png"
              alt=""
            />
            참가 신청한 여행
          </SmallTitle>
          <SmallTitle onClick={() => navigate('/myTrip')}>
            <img
              src="/images/createTripBtn.png"
              alt=""
            />
            참가 중인 여행
          </SmallTitle>
        </Box>
        <div css={{ marginTop: '16px' }}>
          <SmallTitle>
            <a
              href={'/pdf/service_terms(241006).pdf'}
              target="_blank">
              약관 및 정책
            </a>
          </SmallTitle>
        </div>
      </Menu>
    </Container>
  )
}
const ProfileImg = styled.div``
const Container = styled.div`
  padding: 0px 24px;
  margin-top: 4px;
`
const MoreBox = styled.div`
  display: flex;
  align-items: center;
`
const UserName = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  color: ${palette.기본};
  margin-right: 4px;
`

const Tags = styled.div`
  display: flex;
`
const Email = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: ${palette.비강조};
  margin-bottom: 9px;
`
const UserInfo = styled.div`
  height: 128px;
  width: 100%;
  background-color: ${palette.검색창};
  padding: 24px 16px;
  gap: 16px;
  border-radius: 20px;
  display: flex;
`
const Menu = styled.div`
  margin-top: 24px;
  width: 100%;
`
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${palette.기본};
  text-align: left;
  margin-bottom: 8px;
`
const SmallTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: ${palette.기본};
  height: 52px;
  padding: 14px 0px 22px 0px;
  gap: 8px;
  opacity: 0px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`
const Box = styled.div`
  border-bottom: 1px solid #e7e7e7;
  padding-top: 14px;
`
