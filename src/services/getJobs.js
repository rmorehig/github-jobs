const API_URL = 'https://jobs.github.com'

async function getJobs({ description = '', location = null }) {
  const response = await fetch(
    `${API_URL}/positions.json?description=${description}&location=${location}`
  )
  return await response.json()
}

export default getJobs
