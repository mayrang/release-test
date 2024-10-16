import CheckingModal from '@/components/designSystem/modal/CheckingModal'
import ResultModal from '@/components/designSystem/modal/ResultModal'
import ResultToast from '@/components/designSystem/toastMessage/resultToast'
import useEnrollment from '@/hooks/enrollment/useEnrollment'
import useAuth from '@/hooks/user/useAuth'

import { authStore } from '@/store/client/authStore'
import { palette } from '@/styles/palette'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TripEnrollmentCard from './TripEnrollmentCard'
import { getCurrentFormattedDate } from '@/utils/time'
import { tripDetailStore } from '@/store/client/tripDetailStore'

interface enrollment {
  enrollmentNumber: number
  userName: string
  userAgeGroup: string
  enrolledAt: string
  message: string
  status: string
  profileUrl: string
}
export default function TripEnrollmentList() {
  const { travelNumber } = useParams<{ travelNumber: string }>()
  const { createdAt } = tripDetailStore()
  const { enrollmentList, enrollmentsLastViewed, updateLastViewed } =
    useEnrollment(parseInt(travelNumber!))
  // 최근에 본 시점.
  const list = enrollmentList.data?.data

  // 처음에는 null 값이니, 생성했을 때 시간 으로 두기.
  const lastViewed =
    enrollmentsLastViewed.data?.lastViewedAt === null
      ? createdAt
      : enrollmentsLastViewed.data?.lastViewedAt

  const isNew = (last: string, enrolledTime: string) => {
    // 문자열을 Date 객체로 변환
    const lastTime = new Date(last.replace('.', '-').replace('.', '-'))
    const enrolledAt = new Date(
      enrolledTime.replace('.', '-').replace('.', '-')
    )

    // 주어진 날짜가 현재 시간보다 이전인지 확인
    return lastTime < enrolledAt
  }
  //현재 시간을 2000.10.10 11:11 문자열로 반환.
  function todayFormattedDate() {
    const now = new Date()

    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0') // 0부터 시작하므로 +1
    const day = String(now.getDate()).padStart(2, '0')

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')

    return `${year}.${month}.${day} ${hours}:${minutes}`
  }

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 최근 열람 시간 put API 요청 보내기.
    return () => {
      updateLastViewed(todayFormattedDate())
    }
  }, [])

  return (
    <Container>
      {list && lastViewed && (
        <>
          <Count>
            총
            <p css={{ marginLeft: '4px', color: palette.keycolor }}>
              {!list.totalCount ? 0 : list.totalCount}
            </p>
            건
          </Count>
          <div css={{ marginTop: '16px' }}>
            {list.enrollments?.map((enrollment: enrollment) => (
              <TripEnrollmentCard
                key={enrollment.enrollmentNumber}
                isNew={isNew(lastViewed, enrollment.enrolledAt)}
                enrollmentNumber={enrollment.enrollmentNumber}
                userName={enrollment.userName}
                ageGroup={enrollment.userAgeGroup}
                enrolledAt={enrollment.enrolledAt}
                message={enrollment.message}
                profileUrl={enrollment.profileUrl}
              />
            ))}
          </div>
        </>
      )}
      <div></div>
    </Container>
  )
}

const Container = styled.div`
  padding: 0px 24px;
`
const Count = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
`
