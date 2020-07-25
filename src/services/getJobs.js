const API_URL = 'https://jobs.github.com'

async function getJobs({ query = '' }) {
  const response = await fetch(`${API_URL}/positions.json?${query}`)
  return await response.json()
}

export default getJobs
