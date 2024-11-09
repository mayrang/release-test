import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '@/api/user'
import { userStore } from '@/store/client/userStore'
import useAuth from '@/hooks/user/useAuth'

const OauthKakao = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const code = searchParams.get('code') // 카카오에서 받은 인증 코드
  const state = searchParams.get('state')
  const { setSocialLogin } = userStore()
  const { socialLogin, socialLoginMutation } = useAuth()
  const { isError, isSuccess } = socialLoginMutation

  useEffect(() => {
    if (socialLoginMutation.isSuccess) {
      navigate('/')
    }
    if (socialLoginMutation.isError) {
      alert(socialLoginMutation.isError)
      navigate('/login')
    }
  }, [isSuccess, isError])

  useEffect(() => {
    console.log(code, state, 'code')
    if (code && state) {
      getToken('kakao', code, state)
        .then(user => {
          console.log('user client', user)
          if (user?.userStatus === 'PENDING') {
            navigate('/registerForm')
            setSocialLogin('kakao')
          } else {
            socialLogin({
              socialLoginId: user?.socialLoginId as string,
              email: user?.userEmail as string
            })
          }
        })
        .catch(error => {
          alert(error)
          navigate('/login')
        })
    }
  }, [code, state])

  return null
}

export default OauthKakao
