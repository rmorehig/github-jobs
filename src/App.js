import React from 'react'
import styled from 'styled-components'
import Search from 'components/Search'
import Filters from 'components/Filters'

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
      <Search />
      <Filters />
    </AppWrapper>
  )
}

export default App
