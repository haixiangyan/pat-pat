import React, {FC, useRef, useState} from 'react'
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
  border-radius: 12px;
  cursor: pointer;
`

const PatPat = styled.p`
  margin-top: 8px;
  color: #5e5e5e;
`

let clock: number | null = null;

const App: FC = () => {
  const [patter] = useState<string>('海怪')
  const [pattee] = useState<string>('懂王')
  const [content] = useState<string>('脸')

  const avatarRef = useRef<HTMLDivElement | null>(null);

  const onPat = () => {
    if (avatarRef === null || clock !== null) return

    avatarRef.current!.className = 'swing';

    clock = setTimeout(() => {
      avatarRef.current!.className = '';
      clock = null;
    }, 1000)
  }

  return (
    <Container>
      <div ref={avatarRef} onDoubleClick={onPat}>
        <Avatar className="shake" src={require('../assets/avatar.jpg')} alt="头像"/>
      </div>
      <PatPat>"{patter}"拍了拍"{pattee}"{content}</PatPat>
    </Container>
  );
}

export default App;
