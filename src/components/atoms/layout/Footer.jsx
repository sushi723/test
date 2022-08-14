import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer = () => {
  return (
    <SFooter>
      &copy; 2022 test Inc.
    </SFooter>
  )
}

const SFooter = styled.footer`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`

