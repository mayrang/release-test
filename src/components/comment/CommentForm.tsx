import useKeyboardResizeEffect from '@/hooks/useKeyboardResizeEffect'
import { palette } from '@/styles/palette'
import styled from '@emotion/styled'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import UpArrowIcon from '../icons/UpArrowIcon'

interface CommentFormProps {
  paddingBottom?: number
  paddingTop?: number
}

const CommentForm = ({
  paddingBottom = 40,
  paddingTop = 16
}: CommentFormProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (inputRef.current) {
      inputRef.current.style.height = '32px'
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 84)}px` // 내용에 맞게 높이 조정, 최대 100px
    }
    setValue(e.target.value)
  }
  useKeyboardResizeEffect()

  return (
    <Container
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}>
      <InputContainer focused={focused}>
        <Input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          ref={inputRef}
          onChange={handleInput}
        />
        <Button canSubmit={value !== ''}>
          <UpArrowIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

const Container = styled.form<{
  paddingBottom: number
  paddingTop: number
}>`
  display: flex;
  align-items: center;
  left: 0;
  bottom: 0;
  position: absolute;
  padding: 0 24px;
  background-color: white;
  padding-top: ${props => Math.abs(props.paddingTop / 844) * 100}svh;
  padding-bottom: ${props => Math.abs(props.paddingBottom / 844) * 100}svh;
  width: 100%;
`
const InputContainer = styled.div<{ focused: boolean }>`
  width: 100%;
  border-radius: 30px;
  border: 1px solid
    ${props => (props.focused ? palette.keycolor : palette.비강조3)};
  display: flex;
  align-items: center;

  padding: 8px;
  min-height: 48px;
  max-height: 100px;
  height: auto;
  box-sizing: border-box;
`
const Input = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  height: 32px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  font-family: Pretendard;
  padding: 5px 16px;
  height: 32px;
  overflow-y: auto; /* 내용이 넘칠 때 스크롤 생성 */
`

const Button = styled.button<{ canSubmit: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props =>
    props.canSubmit ? palette.keycolor : palette.비강조3};
`

export default CommentForm