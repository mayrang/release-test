import FirstStepIcon from '@/components/icons/FirstStepIcon'
import Button from '@/components/Button'
import styled from '@emotion/styled'
import { userStore } from '@/store/client/userStore'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import InputField from '@/components/designSystem/input/InputField'
import { z } from 'zod'
import InfoText from '@/components/designSystem/text/InfoText'
import Spacing from '@/components/Spacing'
import ButtonContainer from '@/components/ButtonContainer'
// 한글만 허용하고 최대 10자로 제한.
const koreanOnly = z
  .string()
  .regex(/^[ㄱ-ㅎ|가-힣]+$/, { message: '한글만 입력 가능합니다.' })
  .max(10, { message: '최대 10자까지 입력 가능합니다.' })

const RegisterName = () => {
  const location = useLocation()

  const navigate = useNavigate()

  const {
    name,
    addName,
    email,
    password,
    resetName,
    socialLogin,
    resetForm,
    setSocialLogin
  } = userStore()
  const [userName, setUserName] = useState(name)

  const isEmailRegister = socialLogin === null

  useEffect(() => {
    if (!isEmailRegister) {
      resetName()
      resetForm()
      setSocialLogin(null)
      navigate('/login')
    }
    if (!email || !password) {
      resetName()
      navigate('/registerForm')
    }
  }, [email, password, socialLogin])

  const handleRemoveValue = () => setUserName('')
  const nextStepClickHandler = () => {
    if (userName.length > 0) {
      navigate('/registerAge')
    }
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
    if (koreanOnly.safeParse(e.target.value).success) {
      addName(e.target.value)
      setNameValidError(false)
    } else {
      setNameValidError(true)
    }
  }
  const [nameValidError, setNameValidError] = useState(false)
  return (
    <RegisterNameWrapper>
      <StepIconContainer>
        <FirstStepIcon />
      </StepIconContainer>
      <StepContent>
        환영합니다! <br />
        이름을 설정해주세요.
      </StepContent>
      <div css={{ marginTop: '14px' }}>
        <InputField
          shake={nameValidError && userName.length > 0}
          success={userName.length > 0 && !nameValidError}
          hasError={nameValidError && userName.length > 0}
          placeholder="이름 입력(최대 10자)"
          value={userName}
          onChange={e => inputChangeHandler(e)}
          handleRemoveValue={handleRemoveValue}
        />
        <div css={{ marginTop: 14, padding: '0 6px' }}>
          {nameValidError && userName.length > 0 ? (
            <InfoText
              shake={userName.length > 0 && nameValidError}
              hasError={userName.length > 0 && nameValidError}>
              최대 10자의 한글만 입력할 수 있습니다.(띄어쓰기 불가)
            </InfoText>
          ) : (
            <Spacing size={16} />
          )}
        </div>
      </div>

      <ButtonContainer>
        <Button
          text="다음"
          onClick={nextStepClickHandler}
          disabled={!(userName.length > 0 && !nameValidError)}
          addStyle={
            location.pathname == '/registerName'
              ? userName.length > 0 && !nameValidError
                ? {
                    backgroundColor: 'rgba(62, 141, 0, 1)',
                    color: 'rgba(240, 240, 240, 1)',
                    boxShadow: 'rgba(170, 170, 170, 0.1)'
                  }
                : {
                    backgroundColor: 'rgba(220, 220, 220, 1)',
                    color: 'rgba(132, 132, 132, 1)'
                  }
              : userName.length > 0 && !nameValidError
                ? {
                    backgroundColor: 'rgba(62, 141, 0, 1)',
                    color: 'rgba(240, 240, 240, 1)',
                    boxShadow: 'rgba(170, 170, 170, 0.1)'
                  }
                : {
                    backgroundColor: 'rgba(220, 220, 220, 1)',
                    color: 'rgba(132, 132, 132, 1)'
                  }
          }
        />
      </ButtonContainer>
    </RegisterNameWrapper>
  )
}

export default RegisterName

const RegisterNameWrapper = styled.div`
  padding: 0px 24px;

  min-height: calc(
    100svh - 68px - 30px
  ); // TO DO: 헤더 68px, 30px은 헤더와 내용 사이 마진. 변수만들어사용.

  margin-top: 30px;
`
const StepIconContainer = styled.div`
  margin-top: 30px;
`

const StepContent = styled.div`
  margin-top: 40px;
  width: 343px;
  height: 68px;
  padding: 0px 6px 0px 6px;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  letter-spacing: -0.025em;
  text-align: left;
`