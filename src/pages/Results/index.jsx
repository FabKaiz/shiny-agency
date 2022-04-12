import { useContext } from 'react'
import { SurveyContext } from '../../utils/context/SurveyProvider'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 90%;
  text-align: center;
  margin-bottom: 2rem;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
  margin: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.primaryDark};
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
    padding-bottom: 1rem;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatQueryParams(answers)

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

  if (error) {
    return (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
          fontSize: '2rem',
        }}
      >
        Oups il y a eu un problème
      </span>
    )
  }

  const resultsData = data?.resultsData

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin:
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
