import axios from 'axios'
import React from 'react'

const api = axios.create({
    baseURL: "http://www.omdbapi.com/"
})

export const getMovies = () => {
  return api.get("?s=marvel&apikey=8ecbb2a2&page=1")
}
