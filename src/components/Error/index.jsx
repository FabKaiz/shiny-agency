import styled from 'styled-components'
import colors from '../../utils/style/colors'
import errorLogo from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  background-color: ${colors.backgroundDarkSecondary};
  max-height: calc(100vh - 549px);
  width: calc(100vw - 120px);
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 70px 0;

  @media (max-width: 450px) {
    margin: 0;
    width: 100vw;
    max-height: 100vh;
  }
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
  max-height: 250px;
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
