import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const req = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const SuperHeroAPI = {
  getByQuery: async function (query) {
    return req.get(`/search/${query}`)
  }
}

export default SuperHeroAPI
