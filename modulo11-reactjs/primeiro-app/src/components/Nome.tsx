type NomeProps = {
  aluno: string;
  idade: number;
}

function Nome({aluno, idade}: NomeProps){
  return(
    <span>Bem-vindo: {aluno} - Idade: {idade} anos</span>
  )
}

export default Nome;