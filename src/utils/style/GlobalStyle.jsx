import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'
import colors from './colors'

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
      isDarkMode ? '#2F2E41' : `${ colors.bgTest}`};
  }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
