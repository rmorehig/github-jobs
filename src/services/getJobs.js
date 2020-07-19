const API_URL = 'https://jobs.github.com'

async function getJobs({ description = '', fullTime = '', location = '' }) {
  const response = await fetch(
    `${API_URL}/positions.json?description=${description}&fullTime=${fullTime}&location=${location}`
  )
  return await response.json()
}

export default getJobs
