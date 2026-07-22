import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        console.log("Filme nao encontrado")
      }
    }

    loadFilme()
  }, [id])

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
    </div>
  )
}

export default Filme