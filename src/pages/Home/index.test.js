import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from '../../utils/context/ThemeProvider'

describe('The Home component', () => {
  it('should render the home without crash', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
  })
})
