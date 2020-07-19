import React from 'react'
import { Link, Route, Switch } from 'wouter'
import styled from 'styled-components'
import Home from 'pages/Home'

const Logo = styled(Link)`
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
      <Logo to="/">
        <span>Github</span> Jobs
      </Logo>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Home} path="/search" />
      </Switch>
    </AppWrapper>
  )
}

export default App
