import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import './freelances.css'
import styled from 'styled-components'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

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
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Freelances = () => {
  return (
    <div className="Freelances">
      <StyledH5>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledH5>
      <StyledH4>Trouvez votre prestataire</StyledH4>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
