import styled from 'styled-components'
import { Component } from 'react'
import colors from '../../utils/style/colors'

const InputWrapper = styled.div`
  color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundDark : colors.backgroundLight};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundDark : colors.backgroundLight};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundDark : colors.backgroundLight};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) =>
      theme === 'light' ? colors.backgroundDark : colors.backgroundLight};
  margin-top: 5px;
  margin-bottom: 15px;
`

// OLD REACT SYNTAX
class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  updateInputValue(value) {
    this.setState({ inputValue: value })
  }

  render() {
    const { theme } = this.props

    return (
      <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse Email</StyledLabel>
        <StyledInput
          theme={theme}
          onChange={(e) => this.updateInputValue(e.target.value)}
        />
        {this.state.inputValue}
      </InputWrapper>
    )
  }
}

export default EmailInput
