import styled from "styled-components"
import { BaseButton } from "./BaseButton"

export const SecondaryButton = (props) => {
  const { children } = props
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`
// 大事なこと
// コンポーネントの役割を考える