import * as React from "react"
import {FC} from "react"
import styled from "styled-components"

interface IProps {
}

const StyledBarrage = styled.div`
  position: absolute;
  animation: barrage 5s linear 0s infinite;
  z-index: -1;
`

const Barrage: FC<IProps> = props => {
  const {children} = props

  return <StyledBarrage>{children}</StyledBarrage>
}

export default Barrage
