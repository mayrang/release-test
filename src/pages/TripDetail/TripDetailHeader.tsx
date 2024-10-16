import CheckingModal from '@/components/designSystem/modal/CheckingModal'
import EditAndDeleteModal from '@/components/designSystem/modal/EditAndDeleteModal'
import ResultToast from '@/components/designSystem/toastMessage/resultToast'
import AlarmIcon from '@/components/icons/AlarmIcon'
import EmptyHeartIcon from '@/components/icons/EmptyHeartIcon'
import FullHeartIcon from '@/components/icons/FullHeartIcon'
import MoreIcon from '@/components/icons/MoreIcon'
import { useUpdateBookmark } from '@/hooks/bookmark/useUpdateBookmark'
import useTripDetail from '@/hooks/tripDetail/useTripDetail'
import { authStore } from '@/store/client/authStore'
import { tripDetailStore } from '@/store/client/tripDetailStore'
import { palette } from '@/styles/palette'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface TripDetailHeaderProps {
  isTripDetailEdit?: boolean // 해당 컴포넌트에서 여행 상세 정보를 들고오고 있으며 edit에서도 바로 값을 받을 수있도록 함.
}
// 헤더부터 주최자인지에 따라 화면이 달라서, 헤더에서 여행 정보를 들고 오기.
export default function TripDetailHeader({
  isTripDetailEdit = false
}: TripDetailHeaderProps) {
  const { userId, accessToken } = authStore()
  const { travelNumber } = useParams<{ travelNumber: string }>()
  const { tripDetail } = useTripDetail(parseInt(travelNumber!))

  const navigate = useNavigate()
  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false)
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false)
  const [isResultModalOpen, setIsResultModalOpen] = useState(false)
  const [checkingModalClicked, setCheckingModalClicked] = useState(false)
  const [threeDotsClick, setThreeDotsClick] = useState(false)

  const {
    addProfileUrl,
    addLocation,
    addUserName,
    addUserNumber,
    addCreatedAt,
    addTitle,
    addDetails,
    addMaxPerson,
    addGenderType,
    addDueDate,
    addPeriodType,
    addTags,
    addPostStatus,
    addNowPerson,
    addEnrollCount,
    addBookmarkCount,
    addHostUserCheck,
    addViewCount,
    addTravelNumber,
    addEnrollmentNumber,
    hostUserCheck,
    addUserAgeGroup,
    addBookmarked,
    bookmarked
  } = tripDetailStore()

  const tripInfos = tripDetail.data?.data
  useEffect(() => {
    console.log(tripInfos)
    if (tripDetail.isFetched) {
      const {
        travelNumber,
        userNumber,
        userName,
        createdAt,
        location,
        title,
        details,
        maxPerson,
        genderType,
        dueDate,
        periodType,
        tags,
        postStatus,
        nowPerson,
        bookmarkCount,
        viewCount,
        hostUserCheck,
        enrollmentNumber,
        enrollCount,
        userAgeGroup,
        bookmarked,
        profileUrl
      } = tripInfos
      const [year, month, day] = dueDate.split('-').map((v: string) => +v)
      const DUEDATE = {
        year,
        month,
        day
      }
      addProfileUrl(profileUrl)
      addTravelNumber(travelNumber)
      addEnrollmentNumber(enrollmentNumber)
      addEnrollCount(enrollCount)
      addCreatedAt(createdAt)
      addUserNumber(userNumber)
      addUserName(userName)
      addLocation(location)
      addTitle(title)
      addDetails(details)
      addMaxPerson(maxPerson)
      addGenderType(genderType)
      addDueDate(DUEDATE)
      addPeriodType(periodType)
      addTags(tags)
      addPostStatus(postStatus)
      addBookmarkCount(bookmarkCount)
      addViewCount(viewCount)
      addHostUserCheck(hostUserCheck)
      addNowPerson(nowPerson)
      addUserAgeGroup(userAgeGroup)
      addPostStatus(postStatus)
      addBookmarked(bookmarked)
    }
  }, [tripDetail.isFetched, tripInfos])

  const { deleteTripDetailMutation } = useTripDetail(parseInt(travelNumber!))
  const [isToastShow, setIsToastShow] = useState(false) // 삭제 완료 메시지.
  const { postBookmarkMutation, deleteBookmarkMutation } = useUpdateBookmark(
    accessToken!,
    userId!,
    parseInt(travelNumber!)
  )
  useEffect(() => {
    if (isDeleteBtnClicked) {
      setIsResultModalOpen(true)
      setIsDeleteBtnClicked(false)
    }
    if (isEditBtnClicked) {
      setThreeDotsClick(false)
      setIsEditBtnClicked(false)
      navigate(`trip/edit/${travelNumber}`)
    }
    if (checkingModalClicked) {
      // 삭제 요청.

      deleteTripDetailMutation().then(res => {
        console.log(res)
        if (res?.data.status === 204) {
          setIsToastShow(true)
          setTimeout(() => {
            navigate('/')
          }, 1800)
        }
      })
    }
  }, [isDeleteBtnClicked, isEditBtnClicked, checkingModalClicked])

  // 북마크
  const bookmarkClickHandler = () => {
    if (bookmarked) {
      deleteBookmarkMutation()
    } else {
      // 북마크 추가.
      postBookmarkMutation()
    }
  }
  return (
    <Container
      hostUserCheck={hostUserCheck}
      isTripDetailEdit={isTripDetailEdit}>
      {hostUserCheck && (
        <div onClick={() => navigate(`/notification`)}>
          <AlarmIcon
            size={23}
            stroke={palette.기본}
          />
        </div>
      )}
      <div onClick={bookmarkClickHandler}>
        {bookmarked ? (
          <FullHeartIcon width={22} />
        ) : (
          <EmptyHeartIcon
            width={22}
            stroke={palette.기본}
          />
        )}
      </div>

      {hostUserCheck && (
        <div onClick={() => setThreeDotsClick(true)}>
          <MoreIcon />
        </div>
      )}
      <EditAndDeleteModal
        setIsEditBtnClicked={setIsEditBtnClicked}
        setIsDeleteBtnClicked={setIsDeleteBtnClicked}
        isOpen={threeDotsClick}
        setIsOpen={setThreeDotsClick}
      />
      <CheckingModal
        isModalOpen={isResultModalOpen}
        modalMsg={`여행 멤버나 관심을 가진 분들이 \n 당황할 수 있어요.`}
        modalTitle="정말 삭제할까요?"
        modalButtonText="삭제하기"
        setIsSelected={setCheckingModalClicked}
        setModalOpen={setIsResultModalOpen}
      />
      <ResultToast
        bottom="80px"
        isShow={isToastShow}
        setIsShow={setIsToastShow}
        text="여행 게시글이 삭제되었어요."
      />
    </Container>
  )
}
const Container = styled.div<{
  hostUserCheck: boolean
  isTripDetailEdit: boolean
}>`
  display: ${props => (props.isTripDetailEdit ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-around;
  width: ${props => (props.hostUserCheck ? '136px' : 'auto')};
`
