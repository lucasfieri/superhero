import axios from 'axios'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3888545997845286'

const req = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const SuperHeroAPI = {
  getByQuery: async function (query) {
    return req.get(`/search/${query}`)
  },
  getById: async function (id) {
    return req.get(`/${id}`)
  }
}

export default SuperHeroAPI
