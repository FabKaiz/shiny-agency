import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Survey = () => {
  const { questionNumber } = useParams()

  return (
    <div className="Home">
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      {parseInt(questionNumber) > 1 && (
        <Link to={`/survey/${parseInt(questionNumber) - 1}`}>
          Question précedante
        </Link>
      )}

      {parseInt(questionNumber) <= 9 ? (
        <Link to={`/survey/${parseInt(questionNumber) + 1}`}>
          Question suivante
        </Link>
      ) : (
        <Link to={`/results`}>Results</Link>
      )}
    </div>
  )
}

export default Survey
