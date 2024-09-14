import styled from '@emotion/styled'

interface BoxLayoutTagProps {
  text: string
  addStyle?: {
    backgroundColor?: string
    color?: string
    height?: string
    border?: string
    borderRadius?: string
    padding?: string
    fontSize?: string
  }
}
const BoxLayoutTag = ({
  text,
  addStyle = {
    backgroundColor: 'rgba(245, 241, 233, 1)',
    padding: '4px 10px 4px 10px',
    color: 'rgba(156, 129, 83, 1)',
    height: '22px',
    borderRadius: '20px',
    fontSize: '12px'
  }
}: BoxLayoutTagProps) => {
  return <Tag css={addStyle}>#{text}</Tag>
}

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`

export default BoxLayoutTag