import React, {FC, useState} from 'react'
import styled from "styled-components"
import './App.css'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #5e5e5e;
`

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  animation: 1s ease-in-out swing;
`

const PatPat = styled.p`
  color: #5e5e5e;
`

const App: FC = () => {
  const [patter] = useState<string>('海怪')
  const [pattee] = useState<string>('三个儿子')
  const [content] = useState<string>('脸')

  return (
    <Container>
      <Avatar src={require('../assets/avatar.png')} alt="头像"/>
      <PatPat>"{patter}"拍了拍"{pattee}"{content}</PatPat>
    </Container>
  );
}

export default App;
