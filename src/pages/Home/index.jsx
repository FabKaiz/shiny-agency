import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import '../../styles/Home.css'
import colors from '../../utils/style/colors'
import homeLogo from '../../assets/home-illustration.svg'

const StyledHome = styledComponents.div`
  background-color: ${colors.backgroundDarkSecondary};
  width: calc(100vw - 278px);
  display: flex;
  justify-content: space-evenly;
  padding: 139px 77px;
  margin: 62px 62px 0 62px;

  @media (max-width: 930px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`

const StyledHomeLeft = styledComponents.div`
  background-color: ${colors.backgroundDarkSecondary};
  max-width: calc(44vw - 139px);

  @media (max-width: 930px) {
    max-width: calc(100vw - 139px);
  }
`

const StyledHomeRight = styledComponents.div`
  background-color: ${colors.backgroundDarkSecondary};
  max-width: calc(44vw - 139px);

  @media (max-width: 930px) {
    display: flex;
    max-width: calc(100vw - 139px);
    justify-content: center;
    align-items: center;
    margin-bottom 1rem
  }
`

const StyledLink = styledComponents(Link)`
  padding: 15px 85px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white !important; border-radius: 10px; background-color: ${colors.primary};`}
 }

 @media (max-width: 930px) {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;

}
`

function Home() {
  return (
    <div className="Home">
      <StyledHome>
        <StyledHomeLeft>
          <h1>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </h1>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </StyledHomeLeft>

        <StyledHomeRight>
          <img src={homeLogo} alt="home" />
        </StyledHomeRight>
      </StyledHome>
    </div>
  )
}

export default Home
