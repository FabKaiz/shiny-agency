import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import '../../styles/Home.css'
import colors from '../../utils/style/colors'
import homeLogo from '../../assets/home-illustration.svg'

const StyledHome = styledComponents.div`
  background-color: ${colors.backgroundDarkSecondary};
  height: calc(100vh - 149px);
  width: calc(100vw - 278px);;
  display: flex;
  justify-content: space-evenly;
  padding: 139px 77px;
  margin: 62px 62px 0 62px;
`

const StyledHomeLeft = styledComponents.div`
  background-color: ${colors.backgroundDarkSecondary};
  max-height: 500px;
  max-width: calc(44vw - 139px);


`

const StyledHomeRight = styledComponents.div`
  background-color: ${colors.backgroundDarkSecondary};
  max-height: 500px;
  max-width: calc(44vw - 139px);

`

const StyledLink = styledComponents(Link)`
  padding: 15px 85px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 10px; background-color: ${colors.primary};`}
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
          <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </StyledHomeLeft>

        <StyledHomeRight>
          <img src={homeLogo} alt="home" />
        </StyledHomeRight>
      </StyledHome>
    </div>
  )
}

export default Home
