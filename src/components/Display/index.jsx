import { DisplayContainer } from "./styles";

const Display = ({value}) => {
  return (
    <DisplayContainer>
        <span>{value}</span>
    </DisplayContainer>
  )
}

export default Display;