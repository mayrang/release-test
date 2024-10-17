import { getJWTHeader } from '@/utils/user'
import { axiosInstance } from '.'

export const getMyPage = (accessToken: string) => {
  return axiosInstance.get('/api/profile/me', {
    headers: getJWTHeader(accessToken)
  })
}
// 프로필 이미지
export const intialPostMyProfileImage = async (accessToken: string) => {
  try {
    if (!accessToken)
      throw new Error('프로필 초기 등록 실패. 로그인을 해주세요.')
    const response = await axiosInstance.post('/api/profile/image', null, {
      headers: getJWTHeader(accessToken)
    })
  } catch (err) {
    console.log(err, '초기 이미지 등록 오류')
  }
}
// 임시저장 Post요청
export const postTempMyProfileImage = async (
  accessToken: string,
  formData: FormData
) => {
  try {
    if (!accessToken) throw new Error('임시 저장 등록 실패. 로그인을 해주세요.')
    const response = await axiosInstance.post(
      '/api/profile/image/temp',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    return response.data
  } catch (err) {
    console.log(err, '프로필 임시 저장 등록 오류')
  }
}

export const getMyProfileImage = async (accessToken: string) => {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.get('/api/profile/image', {
      headers: getJWTHeader(accessToken)
    })

    return response.data
  } catch (err) {
    console.log(err, '현재 프로필 이미지 가져오기 오류')
  }
}
export const putMyProfileImage = async (
  accessToken: string,
  formData: FormData
) => {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.put('/api/profile/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data
  } catch (err) {
    console.log(err, '프로필 이미지 수정하기 오류')
  }
}
// 프로필 이미지 정식 저장 요청.
export const putRealMyProfileImage = async (
  accessToken: string,
  imageUrl: string
) => {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.put(
      '/api/profile/image',
      { imageUrl: imageUrl },
      {
        headers: getJWTHeader(accessToken)
      }
    )
    return response.data
  } catch (err) {
    console.log(err, '프로필 이미지 수정하기 오류')
  }
}
export const deleteMyProfileImage = async (accessToken: string) => {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.delete('/api/profile/image', {
      headers: getJWTHeader(accessToken)
    })
    return response.data
  } catch (err) {
    console.log(err, '프로필 삭제.')
  }
}

// 임시 저장 프로필 삭제
export const deleteTempProfileImage = async (
  accessToken: string,
  deletedTempUrl: string
) => {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.delete('/api/profile/image/temp', {
      data: { deletedTempUrl: deletedTempUrl }, // data에 삭제할 URL 전달
      headers: getJWTHeader(accessToken) // 헤더 전달
    })
    return response.data
  } catch (err) {
    console.log(err, '임시 저장된 미리 보기 프로필 삭제.')
  }
}

export const putMyProfileDefaultImage = async (
  accessToken: string,
  defaultNumber: number
) => {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.put(
      '/api/profile/image/default',
      {
        defaultNumber: defaultNumber
      },
      {
        headers: getJWTHeader(accessToken)
      }
    )

    return response.data
  } catch (err) {
    console.log(err, '기본 프로필 이미지로 수정 요청 에러 발생')
  }
}

export const putMyPage = (
  accessToken: string,
  name: string,
  proIntroduce: string,
  preferredTags: string[],
  ageGroup: string
) => {
  return axiosInstance.put(
    '/api/profile/update',
    {
      name,
      proIntroduce,
      preferredTags,
      ageGroup
    },
    {
      headers: getJWTHeader(accessToken)
    }
  )
}

// 탈퇴하기
export async function deleteMyAccount(accessToken: string) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.delete('/api/user/delete', {
      headers: getJWTHeader(accessToken)
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}
// 비번 확인 조회
export async function postVerifyPassword(
  accessToken: string,
  password: string
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.post(
      '/api/password/verify',
      {
        confirmPassword: password
      },
      {
        headers: getJWTHeader(accessToken)
      }
    )

    return response.data
  } catch (err) {
    console.log(err)
  }
}

export async function putPassword(
  accessToken: string,
  newPassword: string,
  newPasswordConfirm: string
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    const response = await axiosInstance.put(
      '/api/profile/password/change',
      {
        newPassword: newPassword,
        newPasswordConfirm: newPasswordConfirm
      },
      {
        headers: getJWTHeader(accessToken)
      }
    )

    return response.data
  } catch (err) {
    console.log(err)
  }
}
