import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'
import { useTheme } from '../../utils/hooks'
import { useState } from 'react'

const CardLabel = styled.span`
  color: ${({ theme }) =>
  theme === 'light'
    ? colors.primary
    : colors.primaryDark};
  font-size: 22px;
  font-weight: bold;
  text-align: start;
  margin-left: 10px;
`

const CardImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
`

const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
`

const CardName = styled.span`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  color: #fff;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? colors.backgroundLight
      : colors.backgroundDarkSecondary};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  color: black;
  justify-content: space-around;
  user-select: none;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #15141e;
  }
`

const Card = ({ label, title, picture }) => {
  const { theme } = useTheme()
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '⭐️' : ''

  return (
    <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImageDiv theme={theme}>
        <CardImage src={picture} alt="freelance" />
      </CardImageDiv>
      <CardName theme={theme}>
        {star} {title} {star}
      </CardName>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
