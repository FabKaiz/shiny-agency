import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/context/ThemeProvider'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
      <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode : {theme === 'light' ? '🌙' : '☀️' }
      </NightModeButton>
      </FooterContainer>
  )
}

export default Footer
