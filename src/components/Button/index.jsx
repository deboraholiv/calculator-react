import { ButtonContainer } from "./styles";

const Button = ({ value, onClick }) => {
  return (
    <ButtonContainer value={value} onClick={onClick} type="button">
      {value}
    </ButtonContainer>
  )
}

export default Button;