import { getJWTHeader } from '@/utils/user'
import { axiosInstance } from '.'
import { IPostEnrollment } from '@/model/enrollment'
// 신청자 - 참가 신청
export async function postEnrollment(
  data: IPostEnrollment,
  accessToken: string | null
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    return axiosInstance.post('/api/enrollment', data, {
      headers: getJWTHeader('')
    })
    return true
  } catch (err) {
    console.log(err)
  }
}
// 신청자 - 참가신청 취소
export async function cancelEnrollment(
  enrollmentNumber: number,
  accessToken: string | null
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    return axiosInstance.delete(`/api/enrollment/${enrollmentNumber}`, {
      headers: getJWTHeader(accessToken)
    })
  } catch (err) {
    console.log(err)
  }
}
// 주최자 - 참가 신청 목록 조회.
export async function getEnrollments(
  travelNumber: number,
  accessToken: string | null
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    return axiosInstance.get(`/api/travel/${travelNumber}/enrollments`, {
      headers: getJWTHeader(accessToken)
    })
  } catch (err) {
    console.log(err)
  }
}
// 참가 신청 거절
export async function rejectEnrollment(
  enrollmentNumber: number,
  accessToken: string | null
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    return axiosInstance.put(`/api/enrollment/${enrollmentNumber}/rejection`, {
      headers: getJWTHeader(accessToken)
    })
  } catch (err) {
    console.log(err)
  }
}
// 참가 신청 수락.
export async function acceptEnrollment(
  enrollmentNumber: number,
  accessToken: string | null
) {
  try {
    if (!accessToken) throw new Error('로그인을 해주세요.')
    return axiosInstance.post(
      `/api/enrollment/${enrollmentNumber}/acceptance`,
      {
        headers: getJWTHeader(accessToken)
      }
    )
  } catch (err) {
    console.log(err)
  }
}
