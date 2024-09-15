import styled from '@emotion/styled'
import { forwardRef } from 'react'

interface SearchFilterTagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  idx: number
  addStyle?: {
    backgroundColor?: string
    color?: string
  }
  disabled?: boolean
  active?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
// 사용 방식
// idx 는
// 어느 버튼을 눌렀는지 확인하기 위해 id property에 넣는 값.
// 클릭했을 때, 해당 id를 이용해서, 배열의 해당 인덱스의 active 상태를 표현. active 상태를 나타내는 boolean 배열을 state로사용.
// button 사용하듯이 props 사용 가능.
// active 값으로 바탕색이 초록색이 됨.
{
  /* <SearchFilterTag
  idx={번호}
  addStyle={{ border: 'none', backgroundColor: 'green', color: ' white' }}
/> */
}

const SearchFilterTag = forwardRef<HTMLButtonElement, SearchFilterTagProps>(
  (
    {
      text,
      idx,
      active = false,
      onClick,
      disabled = false,
      addStyle = {
        backgroundColor: active
          ? 'rgba(62, 141, 0, 1)'
          : ' rgba(240, 240, 240, 1)',
        color: 'rgba(52, 52, 52, 1);'
      },
      ...props
    },
    ref
  ) => {
    return (
      <SearchFilterTagContainer
        disabled={disabled}
        id={`${idx}`}
        onClick={onClick}
        css={addStyle}>
        #{text}
      </SearchFilterTagContainer>
    )
  }
)

const SearchFilterTagContainer = styled.button`
  padding: 8px 14px;
  border-radius: 15px;
`
export default SearchFilterTag
