import React from 'react'
import Job from 'components/Job'
import { Wrapper } from './styles'

const Results = ({ jobs = [] }) => {
  return (
    <Wrapper>
      {jobs.map(job => (
        <Job key={job.id} {...job} />
      ))}
    </Wrapper>
  )
}

export default Results
