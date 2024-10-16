import { ISearchData } from '@/model/search'
import { axiosInstance } from '.'
import { Filters } from '@/hooks/search/useSearch'
import { getJWTHeader } from '@/utils/user'
import { daysAgo } from '@/utils/time'
import dayjs from 'dayjs'

export async function getSearch(
  pageParams: number,
  keyword: string,
  filters: Filters,
  accessToken: string
) {
  const { tags, period, person, gender, location } = filters
  const response = await axiosInstance.get('/api/travels/search', {
    params: {
      keyword: keyword,
      page: pageParams,
      tags: tags.join(','),
      period: period.join(','),
      person: person.join(','),
      gender: gender.join(','),
      location: location.join(',')
    },
    headers: getJWTHeader(accessToken)
  })
  let data = response.data as ISearchData | undefined
  if (response.data) {
    data = {
      ...response.data,
      content: (response.data as ISearchData).content.filter(
        item =>
          dayjs(item.registerDue, 'YYYY-MM-DD').diff(
            dayjs().startOf('day'),
            'day'
          ) >= 0
      )
    }
  } else {
    return response.data
  }

  return data
}

export async function getSearchRelation(keyword: string, accessToken: string) {
  try {
    const response = await axiosInstance.get('/api/autocomplete', {
      params: {
        location: keyword
      },
      headers: getJWTHeader(accessToken)
    })
    console.log('data', response)
    return response.data as { suggestions: string[] }
  } catch (err) {
    console.error(err)
  }
}
