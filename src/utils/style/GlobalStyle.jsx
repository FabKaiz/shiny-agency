import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    color: ${({ isDarkMode }) =>
      isDarkMode ? 'white !important' : 'black !important'};
    margin: 0;
  }
  
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
  }

  div {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? '#2F2E41' : 'white !important'};
  }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
