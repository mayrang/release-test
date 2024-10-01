import { INotificationContent } from '@/model/notification'
import styled from '@emotion/styled'
import React from 'react'
import RoundedImage from '../designSystem/profile/RoundedImage'
import { palette } from '@/styles/palette'
import { daysLeft, formatTime } from '@/utils/time'
import Badge from '../designSystem/Badge'

interface NotificationItemProps {
  data: INotificationContent
}

const NotificationItem = ({ data }: NotificationItemProps) => {
  return (
    <Container>
      <TopContainer>
        <RoundedImage
          size={32}
          src=""
        />
        <TextContainer>
          <InfoContainer>
            <div>{data.title}</div>
            <TimeContainer>
              <div>{formatTime(data.createdAt)}</div>
              {!data.isRead && <RedDot />}
            </TimeContainer>
          </InfoContainer>
          <Content>{data.content}</Content>
        </TextContainer>
      </TopContainer>
      {data?.travelDueDate && data?.travelTitle && (
        <TravelContainer>
          <Badge
            text="마감"
            backgroundColor={palette.keycolorBG}
            color={palette.keycolor}
            daysLeft={daysLeft(data.travelDueDate)}
            isDueDate
          />
          <TravelTitle>{data.travelTitle}</TravelTitle>
        </TravelContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  border-radius: 20px;
  background-color: #fff;
  padding: 16px 15px;
  box-shadow: 0px 2px 4px 1px #aaaaaa1a;
  width: 100%;
`

const TopContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  justify-content: center;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${palette.비강조2};
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
`

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: center;
`

const RedDot = styled.div`
  background-color: #ea2a2a;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`

const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
`

const TravelContainer = styled.div`
  background-color: ${palette.검색창};
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 16px;
  border-radius: 20px;
`

const TravelTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  white-space: nowrap; //텍스트가 한 줄로 유지되도록 설정
  overflow: hidden;
  text-overflow: ellipsis; // 텍스트가 잘릴 때 줄임표(...)를 표시
`

export default NotificationItem