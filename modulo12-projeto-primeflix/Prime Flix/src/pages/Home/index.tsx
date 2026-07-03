import { useEffect, useState } from "react"
import api from "../../services/api"

// API_URL: /movie/now_playing?api_key=f1dd778f93caaa510c295dabd3c08be3&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "f1dd778f93caaa510c295dabd3c08be3",
          language: "pt-BR",
          page: 1
        }
      })

      console.log(response.data.results)

    }

    loadFilmes()

  }, [])

  return (
    <div>
      <h1>Bem vindo a Home</h1>
    </div>
  )
}

export default Home