import * as React from "react"
import {FC} from "react"
import styled from "styled-components"

interface IProps {
  top: number
  delay: number
}

const StyledBarrage = styled.div`
  position: absolute;
  left: 100%;
  transform: translate3d(0, 0, 0);
  animation: barrage 5s linear infinite;
  white-space: nowrap;
  z-index: -1;
`

const Barrage: FC<IProps> = props => {
  const {children, top, delay} = props

  const style = {top: `${top}vh`, animationDelay: `${delay}ms`}

  return <StyledBarrage style={style}>{children}</StyledBarrage>
}

export default Barrage
