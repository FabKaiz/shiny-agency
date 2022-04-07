import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logoDark from '../../assets/light-logo.png'
import logoLight from '../../assets/dark-logo.png'
import { ThemeContext } from '../../utils/context/ThemeProvider'
import { useContext } from 'react'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;

  @media (max-width: 688px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`

const HeaderImg = styled.img`
  @media (max-width: 688px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  padding: 15px;
  margin-right: 25px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white !important; border-radius: 10px; background-color: ${colors.primary};`}
 }

 @media (max-width: 488px) {
  margin-right: 5px;

 }
`

const Header = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <StyledNav>
      <div className="nav__logo">
        {theme === 'dark' ? (
          <HeaderImg src={logoDark} alt="logo" />

        ) : (
          <HeaderImg src={logoLight} alt="logo" />
        )}
      </div>
      <div className="nav__right">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
