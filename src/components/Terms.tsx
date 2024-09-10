import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import WhiteXIcon from './icons/WhiteXIcon'
import { keyframes } from '@emotion/react'
import Spacing from './Spacing'
import CheckIcon from './icons/CheckIcon'
import Button from './Button'

interface TermsProps {
  closeShowTerms: () => void
}

const Terms = ({ closeShowTerms }: TermsProps) => {
  const [check, setCheck] = useState({
    service: false,
    privacy: false
  })
  const navigate = useNavigate()
  const handleBackButton = () => {
    navigate(-1)
  }

  const handleAllCheck = () => {
    if (check.service && check.privacy) {
      setCheck(prev => ({
        service: false,
        privacy: false
      }))
    } else {
      setCheck(prev => ({
        service: true,
        privacy: true
      }))
    }
  }

  const handleCheck = (item: 'privacy' | 'service') => {
    setCheck(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  }
  return (
    <Container>
      <BackButotn onClick={handleBackButton}>
        <WhiteXIcon />
      </BackButotn>
      <TermsContainer>
        <Title>약관에 동의해주세요.</Title>
        <Spacing size={40} />
        <AllContainer>
          <button onClick={handleAllCheck}>
            {check.privacy && check.service ? (
              <CheckIcon
                status="done"
                size={24}
              />
            ) : (
              <CheckIcon size={24} />
            )}
          </button>
          <AllText>
            <AllTitle>전체동의</AllTitle>
            <AllDescription>
              서비스 이용을 위해 아래 약관에 모두 동의합니다.
            </AllDescription>
          </AllText>
        </AllContainer>
        <Bar />
        <TermContainer>
          <button onClick={() => handleCheck('service')}>
            {check.service ? (
              <CheckIcon
                status="done"
                size={18}
              />
            ) : (
              <CheckIcon size={18} />
            )}
          </button>
          <TermTitle>(필수) 서비스 이용 약관</TermTitle>
          <TermMore>보기</TermMore>
        </TermContainer>
        <Spacing size={41} />
        <TermContainer>
          <button onClick={() => handleCheck('privacy')}>
            {check.privacy ? (
              <CheckIcon
                status="done"
                size={18}
              />
            ) : (
              <CheckIcon size={18} />
            )}
          </button>
          <TermTitle>(필수) 개인정보 수집, 이용 동의</TermTitle>
          <TermMore>보기</TermMore>
        </TermContainer>
        <Spacing size={111} />
        {check.privacy && check.service ? (
          <Button
            text="확인"
            onClick={closeShowTerms}
          />
        ) : (
          <Button
            text="확인"
            disabled
            addStyle={{
              backgroundColor: 'rgba(220, 220, 220, 1)',
              color: 'rgba(132, 132, 132, 1)',
              boxShadow: '-2px 4px 5px 0px rgba(170, 170, 170, 0.1)'
            }}
          />
        )}
        <Spacing size={40} />
      </TermsContainer>
    </Container>
  )
}

const Bar = styled.div`
  height: 1px;
  width: 100%;
  margin: 30px 0;
  background-color: rgba(205, 205, 205, 1);
`

const Container = styled.div`
  height: 100svh;
  position: fixed;
  z-index: 9999;
  width: 100%;

  @media (min-width: 440px) {
    width: 390px;
    left: 50%;
    transform: translateX(-50%);
  }

  background-color: rgba(0, 0, 0, 0.6);
`

const BackButotn = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
`
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(-48px);
    opacity: 1;
  }
`

const TermsContainer = styled.div`
  width: 100%;
  bottom: 0;

  @media (min-width: 440px) {
    width: 390px;
  }
  position: absolute;
  padding: 0 30px;

  padding-top: 48px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background-color: white;
  animation: ${slideUp} 0.5s ease-out forwards;
`

const Title = styled.h2`
  font-size: 24px;
  letter-spacing: -0.04px;
  font-weight: 600;
`

const AllContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const AllText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const AllTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.04px;
`

const TermTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.04px;
  flex: 1;
`

const TermMore = styled.div`
  color: rgba(171, 171, 171, 1);
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.04px;
  text-decoration: underline;
`

const AllDescription = styled.div`
  font-size: 14px;
  letter-spacing: -0.04px;
  color: rgba(171, 171, 171, 1);
`

const TermContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`

export default Terms
