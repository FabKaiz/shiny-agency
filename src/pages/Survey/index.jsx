import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms.jsx'
import { SurveyContext } from '../../utils/context/SurveyProvider'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 289px);
  color: #fff;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: #fff;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9e3;
  font-weight: 700;
  font-size: 25px;
  color: #2F2E41 !important;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }

`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)
  const { answers, saveAnswers } = useContext(SurveyContext)


  
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:8000/survey`)
      const { surveyData } = await response.json()
      setSurveyData(surveyData)
      setDataLoading(false)
    } catch (error) {
      console.log('===== error =====', error)
      setError(true)
    }
  }

  useEffect(() => {
    setDataLoading(true)
    fetchData()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <SurveyContainer>
    <QuestionTitle>Question {questionNumber}</QuestionTitle>
    {isDataLoading ? (
      <Loader />
    ) : (
      <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
    )}
    <ReplyWrapper>
      <ReplyBox
        onClick={() => saveReply(true)}
        isSelected={answers[questionNumber] === true}
      >
        Oui
      </ReplyBox>
      <ReplyBox
        onClick={() => saveReply(false)}
        isSelected={answers[questionNumber] === false}
      >
        Non
      </ReplyBox>
    </ReplyWrapper>
    <LinkWrapper>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {surveyData[questionNumberInt + 1] ? (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
    </LinkWrapper>
  </SurveyContainer>
  )
}

export default Survey
