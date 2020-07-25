import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "pages/Home";
import { SearchProvider } from "context/search";

const Logo = styled(Link)`
  color: #282538;
  font-family: Poppins;
  font-size: 24px;
  line-height: 36px;
  span {
    font-weight: bold;
  }
`;
const AppWrapper = styled.div`
  padding: 12px;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Logo to="/">
          <span>Github</span> Jobs
        </Logo>
        <SearchProvider>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Home />
            </Route>
          </Switch>
        </SearchProvider>
      </Router>
    </AppWrapper>
  );
}

export default App;
