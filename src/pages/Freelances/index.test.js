import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { render } from '../../utils/test'

import Freelances from './'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  // On précise ici l'url qu'il faudra "intercepter"
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

test('Should render without crash', async () => {
  render(<Freelances />)

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
  })
})

it('Should display error content', async () => {
  server.use(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({
          errorMessage: `Il y a une error dans l'API, elle n'est peut etre pas demarrer`,
        })
      )
    })
  )
  render(<Freelances />)
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByTestId('error')).toMatchInlineSnapshot(`
    <span
      data-testid="error"
      style="display: flex; align-items: center; justify-content: center; text-align: center; margin-top: 2rem; font-size: 2rem;"
    >
      Oups il y a eu un problème: 
      <br />
      Il y a une error dans l'API, elle n'est peut etre pas demarrer
    </span>
  `)
})

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())
