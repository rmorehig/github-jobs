import { useState, useEffect } from 'react'
import getJobs from 'services/getJobs'
import { getParam } from 'utils/navigation'

function useJobs({ description, location }) {
  const [jobs, setJobs] = useState()
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const description = getParam('description')
    const fullTime = getParam('fullTime')
    const location = getParam('location')
    setStatus('pending')
    getJobs({ description, fullTime, location }).then(jobs => {
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
