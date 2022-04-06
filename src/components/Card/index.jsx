import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-align: start;
  margin-left: 10px;
  
`

const CardImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundDarkSecondary};

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
  background-color: ${colors.backgroundDarkSecondary};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  color: black;
  justify-content: space-around;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #15141e;
  }
`

const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImageDiv>
        <CardImage src={picture} alt="freelance" />
      </CardImageDiv>
      <CardName>{title}</CardName>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

Card.defaultProps = {
  title: 'Mon titre par défaut',
}

export default Card
