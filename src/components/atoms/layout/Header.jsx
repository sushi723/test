import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = (props) => {
  const { children } = props
  return (
    <>
      <SHeader>
        <SLink to="/">HOME</SLink>
        <SLink to="/users">USERS</SLink>
      </SHeader>
    </>
  )
}

const SHeader = styled.header`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px 0;
`

const SLink = styled(Link)`
  margin: 0 8px;
`