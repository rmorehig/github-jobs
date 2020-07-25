import React from "react";
import styled from "styled-components";
import Search from "components/Search";
import Filters from "components/Filters";
import useJobs from "./useJobs";
import Results from "components/Results";
import Spinner from "components/Spinner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
const Home = () => {
  const { jobs, status } = useJobs();
  return (
    <div>
      <Search />
      <Filters />
      {status === "loading" && (
        <Container>
          <Spinner />
        </Container>
      )}
      <Results jobs={jobs} status={status} />
    </div>
  );
};

export default Home;
