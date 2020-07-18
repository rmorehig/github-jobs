import { useState, useEffect } from 'react'
import getJobs from 'services/getJobs'

function useJobs({ description, location }) {
  const [jobs, setJobs] = useState()
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    setStatus('pending')
    getJobs({ description, location }).then(jobs => {
      setJobs(jobs)
      setStatus('success')
    })
  }, [description, location, setJobs, setStatus])

  return {
    jobs,
    status
  }
}

export default useJobs
