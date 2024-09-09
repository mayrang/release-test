import FirstStepIcon from '@/components/icons/FirstStepIcon'
import Button from '@/components/Button'
import styled from '@emotion/styled'
import { userStore } from '@/store/userStore'
import { useState } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import InputField from '@/components/designSystem/input/InputField'
import { isValid, z } from 'zod'
import InfoText from '@/components/designSystem/text/InfoText'

// 한글만 허용하고 최대 10자로 제한.
const koreanOnly = z
  .string()
  .regex(/^[ㄱ-ㅎ|가-힣]+$/, { message: '한글만 입력 가능합니다.' })
  .max(10, { message: '최대 10자까지 입력 가능합니다.' })

const RegisterName = () => {
  const location = useLocation()

  const navigate = useNavigate()
  const { name, addName } = userStore()
  const [userName, setUserName] = useState(name)
  const [genderCheck, setGenderCheck] = useState(false)

  const handleRemoveValue = () => setUserName('')
  const nextStepClickHandler = () => {
    if (userName.length > 0) {
      if (location.pathname == '/registerName') {
        navigate('/registerName/registerGender')
      } else if (
        genderCheck &&
        location.pathname == '/registerName/registerGender'
      ) {
        navigate('/registerPhoneNumber')
      }
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
      </div>
      <Outlet context={{ setGenderCheck }} />
      <ButtonWrapper
        css={
          location.pathname == '/registerName'
            ? { marginTop: '434px' }
            : { marginTop: '119px' }
        }>
        <Button
          text="다음"
          onClick={nextStepClickHandler}
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
              : genderCheck && userName.length > 0 && !nameValidError
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
      </ButtonWrapper>
    </RegisterNameWrapper>
  )
}

export default RegisterName

const RegisterNameWrapper = styled.div`
  padding: 0px 24px;
`
const StepIconContainer = styled.div`
  margin-top: 30px;
`

const StepContent = styled.div`
  margin-top: 30px;
  width: 343px;
  height: 68px;
  padding: 0px 6px 0px 6px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  letter-spacing: -0.025em;
  text-align: left;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
