import axios from "axios"

// API-KEY: f1dd778f93caaa510c295dabd3c08be3
// BASE_URL: https://api.themoviedb.org/3
// API_URL: /movie/now_playing?api_key=f1dd778f93caaa510c295dabd3c08be3&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api