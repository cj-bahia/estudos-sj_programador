import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import "./home.css"

// API_URL: /movie/now_playing?api_key=f1dd778f93caaa510c295dabd3c08be3&language=pt-BR

interface Filme{
  id: number
  title: string
  poster_path: string
}

function Home() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "f1dd778f93caaa510c295dabd3c08be3",
          language: "pt-BR",
          page: 1
        }
      })

      setFilmes(response.data.results.slice(0, 10))
      setLoading(false)

    }

    loadFilmes()

  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`capa do filme: ${filme.title}`} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home