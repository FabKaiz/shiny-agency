import { useContext } from 'react'
import { SurveyContext } from '../../utils/context/SurveyProvider'

const Results = () => {
  const { answers } = useContext(SurveyContext)
  console.log(answers)

  return (
    <div className="Home">
      <h1>Results 📈 </h1>
    </div>
  )
}

export default Results
