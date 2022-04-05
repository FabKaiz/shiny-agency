import styled from 'styled-components'
import colors from '../../utils/style/colors'
import errorLogo from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  background-color: ${colors.backgroundDarkSecondary};
  height: calc(100vh - 149px);
  width: calc(100vw - 120px);
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
  margin-bottom: 60px;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #fff;
  margin-top: 60px;
  text-align: center;
`

const Illustration = styled.img`
  max-width: 800px;
  width: 80%;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={errorLogo} />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
