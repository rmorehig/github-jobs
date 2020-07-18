import React from 'react'
import Search from 'components/Search'
import Filters from 'components/Filters'
import useJobs from './useJobs'
import Results from 'components/Results'

const Home = () => {
  const { jobs, status } = useJobs({})
  return (
    <div>
      <Search />
      <Filters />
      <Results jobs={jobs} status={status} />
    </div>
  )
}

export default Home
