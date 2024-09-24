import Button from '@/components/Button'
import CreateTripInputField from '@/components/designSystem/input/CreateTripInputField'
import FirstStepIcon from '@/components/icons/FirstStepIcon'
import PlaceIcon from '@/components/icons/PlaceIcon'
import RelationKeywordList from '@/components/relationKeyword/RelationKeywordList'
import Spacing from '@/components/Spacing'
import { createTripStore } from '@/store/client/createTripStore'
import { searchStore } from '@/store/client/searchStore'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateTripPlace() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const { addLocation } = createTripStore()
  const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const clickRelationKeyword = (keyword: string) => {
    setKeyword(keyword)
  }

  const handleRemoveValue = () => setKeyword('')

  const handleNext = () => {
    addLocation(keyword)
    navigate('/createTripIntroduce')
  }

  return (
    <Container>
      <StepIconContainer>
        <FirstStepIcon />
      </StepIconContainer>
      <Title>어디로 떠나볼까요?</Title>
      <Spacing size={8} />
      <CreateTripInputField
        value={keyword}
        handleRemoveValue={handleRemoveValue}
        onChange={changeKeyword}
        icon={<PlaceIcon />}
      />
      {keyword.length > 0 && (
        <>
          <Spacing size={16} />
          <RelationKeywordList
            onClick={clickRelationKeyword}
            keyword={keyword}
          />
        </>
      )}
      <ButtonContainer>
        <Button
          onClick={handleNext}
          disabled={keyword === ''}
          addStyle={
            keyword === ''
              ? {
                  backgroundColor: 'rgba(220, 220, 220, 1)',
                  color: 'rgba(132, 132, 132, 1)',
                  boxShadow: '-2px 4px 5px 0px rgba(170, 170, 170, 0.1)'
                }
              : undefined
          }
          text={'다음'}
        />
      </ButtonContainer>
    </Container>
  )
}

const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  position: absolute;
  padding: 0 24px;
  background-color: white;
  padding-bottom: 40px;
  left: 0;
`

const StepIconContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`

const Container = styled.div`
  padding: 0 24px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  margin-left: 6px;
  text-align: left;
`
