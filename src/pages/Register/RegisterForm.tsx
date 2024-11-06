import Button from '@/components/Button'
import InputField from '@/components/designSystem/input/InputField'
import InfoText from '@/components/designSystem/text/InfoText'
import Spacing from '@/components/Spacing'
import Terms from '@/components/Terms'
import { userStore } from '@/store/client/userStore'
import styled from '@emotion/styled'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkEmail } from '@/api/user'
import ButtonContainer from '@/components/ButtonContainer'
import { emailSchema, passwordSchema } from '@/utils/schema'
interface ErrorProps {
  email: undefined | string
  password: undefined | string
  confirmPassword: undefined | string
}

const RegisterForm = () => {
  const {
    addEmail,
    addPassword,
    email,
    password,
    socialLogin,
    setSocialLogin
  } = userStore()
  const [showTerms, setShowTerms] = useState(true)
  const [formData, setFormData] = useState({
    email: email,
    password: password,
    confirmPassword: password
  })
  const [success, setSuccess] = useState({
    email: false,
    password: false,
    confirmPassword: false
  })
  const [error, setError] = useState<ErrorProps>({
    email: undefined,
    password: undefined,
    confirmPassword: undefined
  })
  const [shake, setShake] = useState({
    email: false,
    password: false,
    confirmPassword: false
  })

  const navigate = useNavigate()
  const isSocialLoginGoogle = socialLogin === 'google'
  const isSocialLoginKakao = socialLogin === 'kakao'
  const isSocialLoginNaver = socialLogin === 'naver'

  const allSuccess = isSocialLoginKakao
    ? success.email
    : Object.values(success).every(value => value)

  const closeShowTerms = () => {
    setShowTerms(false)
  }

  useEffect(() => {
    if (isSocialLoginGoogle || isSocialLoginNaver) {
      setSocialLogin(null)
      navigate('/login')
    }
  }, [socialLogin])

  const handleRemoveValue = (
    name: 'email' | 'password' | 'confirmPassword'
  ) => {
    setSuccess(prev => ({ ...prev, [name]: false }))
    setFormData(prev => ({ ...prev, [name]: '' }))
  }

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (name === 'email') {
      const emailValidation = emailSchema.safeParse(value)
      if (!emailValidation.success) {
        setError(prev => ({
          ...prev,
          email: emailValidation.error.flatten().formErrors[0]
        }))
      } else {
        setError(prev => ({
          ...prev,
          email: undefined
        }))
      }

      setSuccess(prev => ({
        ...prev,
        email: emailValidation.success
      }))
    } else if (name === 'password') {
      const passwordValidation = passwordSchema.safeParse(value)
      let passwordError = false
      const emailLocalPart = formData.email.split('@')[0]
      if (value === formData.email || value === emailLocalPart) {
        passwordError = true
      }
      if (!passwordValidation.success || passwordError) {
        if (passwordError) {
          setError(prev => ({
            ...prev,
            password: '이메일과 동일한 형식의 비밀번호는 사용할 수 없습니다.'
          }))
        } else {
          setError(prev => ({
            ...prev,
            password: passwordValidation.error!.flatten().formErrors[0]
          }))
        }
      } else {
        setError(prev => ({
          ...prev,
          password: undefined
        }))
      }
      setSuccess(prev => ({
        ...prev,
        password: passwordValidation.success && !passwordError
      }))
    } else {
      if (formData.password !== value) {
        setError(prev => ({
          ...prev,
          confirmPassword: '비밀번호가 일치하지 않습니다.'
        }))
      } else {
        setError(prev => ({
          ...prev,
          confirmPassword: undefined
        }))
      }
      setSuccess(prev => ({
        ...prev,
        confirmPassword: formData.password === value
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (allSuccess) {
      const checkingEmail = await checkEmail(formData.email)
      if (!checkingEmail) {
        setShake(prev => ({
          ...prev,
          email: true
        }))
        setError(prev => ({ ...prev, email: '이미 사용중인 이메일입니다.' }))
        setTimeout(() => {
          setShake({ email: false, password: false, confirmPassword: false })
        }, 500)
        return
      }

      addEmail(formData.email)
      if (isSocialLoginKakao) {
        navigate('/registerGender')
      } else {
        addPassword(formData.password)
        navigate('/registerName')
      }
    } else {
      setShake({
        email: Boolean(error.email),
        password: Boolean(error.password),
        confirmPassword: Boolean(error.confirmPassword)
      })

      setTimeout(() => {
        setShake({ email: false, password: false, confirmPassword: false })
      }, 500)
    }
  }

  return (
    <>
      {showTerms && <Terms closeShowTerms={closeShowTerms} />}
      <Container onSubmit={handleSubmit}>
        <FieldContainer>
          <Label htmlFor="email">이메일</Label>
          <Spacing size={16} />
          <InputField
            handleRemoveValue={() => handleRemoveValue('email')}
            type="email"
            name="email"
            onChange={changeValue}
            value={formData.email}
            hasError={Boolean(error.email)}
            success={success.email}
            placeholder="이메일 입력"
            shake={shake.email}
          />
          <Spacing size={10} />
          {error.email ? (
            <InfoText hasError>{error.email}</InfoText>
          ) : (
            <Spacing size={16} />
          )}
        </FieldContainer>

        <Spacing size={'6svh'} />
        {Boolean(socialLogin) && (
          <>
            <FieldContainer>
              <Label htmlFor="password">비밀번호</Label>
              <Spacing size={16} />
              <InputField
                handleRemoveValue={() => handleRemoveValue('password')}
                type="password"
                onChange={changeValue}
                shake={shake.password}
                name="password"
                placeholder="비밀번호 입력"
                hasError={Boolean(error.password)}
                value={formData.password}
                success={success.password}
              />
              <Spacing size={10} />
              {error.password ? (
                <InfoText hasError>{error.password}</InfoText>
              ) : success.password ? (
                <InfoText success>영문 대문자, 특수문자 포함 8~20자</InfoText>
              ) : (
                <InfoText>영문 대문자, 특수문자 포함 8~20자</InfoText>
              )}
            </FieldContainer>

            <Spacing size={14} />
            <FieldContainer>
              <InputField
                shake={shake.confirmPassword}
                handleRemoveValue={() => handleRemoveValue('confirmPassword')}
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 재입력"
                onChange={changeValue}
                hasError={Boolean(error.confirmPassword)}
                value={formData.confirmPassword}
                success={success.confirmPassword}
              />
              <Spacing size={10} />
              {error.confirmPassword ? (
                <InfoText hasError>{error.confirmPassword}</InfoText>
              ) : (
                <Spacing size={16} />
              )}
            </FieldContainer>
          </>
        )}
        <ButtonContainer>
          {allSuccess ? (
            <Button text="다음" />
          ) : (
            <Button
              text="다음"
              addStyle={{
                backgroundColor: 'rgba(220, 220, 220, 1)',
                color: 'rgba(132, 132, 132, 1)',
                boxShadow: '-2px 4px 5px 0px rgba(170, 170, 170, 0.1)'
              }}
              type="submit"
              disabled={true}
            />
          )}
        </ButtonContainer>
      </Container>
    </>
  )
}

const Container = styled.form`
  padding: 0 24px;

  padding-top: 7.1svh;
`

const FieldContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`

const Label = styled.label`
  font-size: 18px;
  letter-spacing: -0.04;
`
export default RegisterForm
