import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import './filme-info.css'
import api from "../../services/api"

interface Filme{
  id: number
  title: string
  overview: string
  backdrop_path: string
  vote_average: number
}

function Filme() {
  const { id } = useParams<{id: string}>()
  const navigate = useNavigate();

  const [filme, setFilme] = useState<Filme | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme(){
      try {
          const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "f1dd778f93caaa510c295dabd3c08be3",
            language: "pt-BR"
          }
      })
      setFilme(response.data)
      setLoading(false)
      } catch {
        navigate("/", { replace: true })
        return
      }
    }

    loadFilme()
  }, [navigate ,id])

  if(loading || !filme){
    return(
      <div className="filme-info">
        <h2>Carregando detalhes...</h2>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme