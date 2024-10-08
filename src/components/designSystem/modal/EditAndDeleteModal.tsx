import { palette } from '@/styles/palette'
import styled from '@emotion/styled'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'
interface EditAndDeleteModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  setIsEditBtnClicked: React.Dispatch<SetStateAction<boolean>>
  setIsDeleteBtnClicked: React.Dispatch<SetStateAction<boolean>>
  isMyApplyTrip?: boolean // 내가 참가한 여행에서도 사용하기 위함.
  deleteText?: string
}
export default function EditAndDeleteModal({
  setIsEditBtnClicked,
  setIsDeleteBtnClicked,
  isOpen,
  setIsOpen,
  isMyApplyTrip = false,
  deleteText = '삭제하기'
}: EditAndDeleteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null) // 모달 참조
  const [isListening, setIsListening] = useState(false) // 모달 창이 열리고, 이벤트 등록이 동기적으로 일어나도록 제한.

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false) // 외부 클릭 시 모달 닫기
    }
  }

  const deleteHandler = () => {
    setIsDeleteBtnClicked(true)
    setIsOpen(false)
  }
  const editHandler = () => {
    setIsEditBtnClicked(true)
    setIsOpen(false)
  }
  return (
    <Container isOpen={isOpen}>
      <Modal
        ref={modalRef}
        isOpen={isOpen}
        nowWidth={window.innerWidth > 390 ? 390 : window.innerWidth}>
        {!isMyApplyTrip ? (
          <BtnBox isMyApplyTrip={isMyApplyTrip}>
            <EditBtn onClick={editHandler}>수정하기</EditBtn>
            <DeleteBtn
              isMyApplyTrip={isMyApplyTrip}
              onClick={deleteHandler}>
              삭제하기
            </DeleteBtn>
          </BtnBox>
        ) : (
          <BtnBox isMyApplyTrip={isMyApplyTrip}>
            <DeleteBtn
              isMyApplyTrip={isMyApplyTrip}
              onClick={deleteHandler}>
              {deleteText}
            </DeleteBtn>
          </BtnBox>
        )}

        <CloseBtn onClick={() => setIsOpen(false)}>닫기</CloseBtn>
      </Modal>

      <DarkWrapper onClick={handleClickOutside}></DarkWrapper>
    </Container>
  )
}
const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #fdfdfd;
  border-radius: 40px;
  padding: 10px 20px;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: ${palette.기본};
`
const EditBtn = styled.button`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  color: ${palette.기본};
`
const DeleteBtn = styled.button<{ isMyApplyTrip: boolean }>`
  height: ${props => (props.isMyApplyTrip ? '100%' : '50%')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  color: ${palette.like};
`
const BtnBox = styled.div<{ isMyApplyTrip: boolean }>`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  height: ${props => (props.isMyApplyTrip ? '52px' : '104px')};
`
const Modal = styled.div<{ isOpen: boolean; nowWidth: number }>`
  width: ${({ nowWidth }) => `calc(${nowWidth}px - 48px)`};
  position: absolute;
  pointer-events: auto;
  padding-top: 24px;

  z-index: 1003;
  bottom: 40px;

  gap: 16px;
  border-radius: 20px;
  opacity: 0px;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(30%)')};
  transition: transform 0.3s ease-in-out;
`
const Container = styled.div<{ isOpen: boolean }>`
  height: 100svh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  justify-content: center;
  white-space: 'pre-line';
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
`
const DarkWrapper = styled.div`
  pointer-events: auto;
  position: absolute;
  width: 100%;
  height: 100svh;
  z-index: 1001;
  top: 0;
  bottom: 0;
  background-color: rgba(26, 26, 26, 0.3);
  opacity: 0.8;
  @media (min-width: 440px) {
    width: 390px;
    left: 50%;
    height: 100svh;
    transform: translateX(-50%);
    overflow-x: hidden;
  }
`
