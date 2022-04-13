import { Component } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { ThemeContext } from '../../utils/context/ThemeProvider'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
`

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`

const Title = styled.h1`
  margin: 0;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
  font-size: 31px;
  line-height: 36px;
`

const JobTitle = styled.h2`
  padding-top: 10px;
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
`

const Location = styled.span`
  margin-left: 15px;
  color: ${({ theme }) =>
    theme === 'light' ? colors.secondary : 'white'};
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
  font-size: 18px;
  line-height: 21px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
`

const Price = styled.span`
  padding-top: 10px;
  font-weight: 700;
  font-size: 31px;
  line-height: 36px;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
`

const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileData: {},
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/freelance?id=${id}`)
      const jsonResponse = await response.json()
      if (jsonResponse && jsonResponse.freelanceData) {
        this.setState({ profileData: jsonResponse?.freelanceData })
      }
    }
    fetchData()
  }
  render() {
    const { profileData } = this.state
    const {
      picture,
      name,
      location,
      tjm,
      job,
      skills,
      available,
      id,
    } = profileData

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ProfileWrapper theme={theme}>
            <Picture src={picture} alt={name} height={150} width={150} />
            <ProfileDetails theme={theme}>
              <TitleWrapper theme={theme}>
                <Title theme={theme}>{name}</Title>
                <Location theme={theme}>{location}</Location>
              </TitleWrapper>
              <JobTitle>{job}</JobTitle>
              <SkillsWrapper theme={theme}>
                {skills &&
                  skills.map((skill) => (
                    <Skill key={`skill-${skill}-${id}`} theme={theme}>
                      {skill}
                    </Skill>
                  ))}
              </SkillsWrapper>
              <Availability available={available}>
                {available ? 'Disponible maintenant' : 'Indisponible'}
              </Availability>
              <Price>{tjm} € / jour</Price>
            </ProfileDetails>
          </ProfileWrapper>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Profile
