import React from 'react'
import styled from 'styled-components'
import Home from 'pages/Home'

const Logo = styled.a`
  color: #282538;
  font-family: Poppins;
  font-size: 24px;
  line-height: 36px;
  span {
    font-weight: bold;
  }
`
const AppWrapper = styled.div`
  padding: 12px;
`
function App() {
  return (
    <AppWrapper>
      <Logo href="/">
        <span>Github</span> Jobs
      </Logo>
      <Home />
    </AppWrapper>
  )
}

export default App
