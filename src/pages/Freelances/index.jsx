import Card from '../../components/Card'
import './freelances.css'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'

const StyledH4 = styled.h4`
  margin: 0;
  margin-bottom: 76px;
  font-size: 30px;
  line-height: 132.5%;
`

const StyledH5 = styled.h5`
  margin: 0;
  margin-bottom: 52px;
  font-size: 20px;
  line-height: 132.5%;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 76px;

  @media (max-width: 738px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1368px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1568px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Freelances = () => {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  const profilData = data?.freelancersList

  if (error) {
    return (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '2rem',
        }}
        data-testid="error"
      >
        Oups il y a eu un problème: <br />
        {error}
      </span>
    )
  }

  return (
    <div className="Freelances">
      <StyledH5>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledH5>
      <StyledH4>Trouvez votre prestataire</StyledH4>
      <CardsContainer>
        {isLoading ? (
          <Loader data-testid="loader" />
        ) : (
          profilData.map((profile) => (
            <Card
              key={`${profile.name}-${profile.id}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))
        )}
      </CardsContainer>
    </div>
  )
}

export default Freelances
