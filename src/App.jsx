import Button from "./components/Button"
import Display from "./components/Display"
import { Container, Content, Cal } from "./styles"
import { useState } from "react"

function App() {

  const[number, setNumber] = useState(0)
  const [operation, setOperation] = useState()
  const[display, setDisplay] = useState(0)

  const inputNumber = (e) =>{
    if(display===0) {
      setDisplay(e.target.value)
    }else{
      setDisplay(display + e.target.value)
    }
  }

  const handlerOnClear = () => {
    setNumber(0)
    setDisplay(0)
    setOperation('')
  }
  
  const handlerDelele = () =>{
    if(display===0){
      setDisplay(0)
    }else if(display.length === 1){
      setDisplay(0)
    }else{
      setDisplay(display.substring(0, display.length - 1))
    }
  }

  const handlerPorcent = () => {
    setDisplay(display/100)
  }

  const handlerSing =() => {
    if(display>0) {
      setDisplay(-display)
    }else{
      setDisplay(Math.abs(display))
    }
  }

  const handlerOperator = (e) => {
    if(number){
      setNumber(handlerCalculate(e.target.value))
    } else {
      setNumber(display)
      setOperation(e.target.value)
    }
    setDisplay(0)
  }

  const handlerCalculate = (operator) => {
    switch(operator){
      case '+':
        return(parseFloat(number) + parseFloat(display));
      case '-':
        return(parseFloat(number) - parseFloat(display));;
      case 'x':
        return(parseFloat(number) * parseFloat(display));
      case '/':
        return(parseFloat(number) / parseFloat(display));
      default: 
        break;
    } 
  }

  const handleEquals = () => {
    setDisplay(handlerCalculate(operation))
  }


  return (
    <Container>
      <h1>A Simple Calculator</h1>
      <Content>
        <Display value={display}/>
        <Cal>
          <Button value={'c'} onClick={handlerOnClear}/>
          <Button value={'+/-'} onClick={handlerSing}/>
          <Button value={'%'} onClick={handlerPorcent}/>
          <Button value={'/'} onClick={handlerOperator}/>
          <Button value={7} onClick={inputNumber}/>
          <Button value={8} onClick={inputNumber}/>
          <Button value={9} onClick={inputNumber}/>
          <Button value={'x'} onClick={handlerOperator}/>
          <Button value={4} onClick={inputNumber}/>
          <Button value={5} onClick={inputNumber}/>
          <Button value={6} onClick={inputNumber}/>
          <Button value={'-'} onClick={handlerOperator}/>
          <Button value={1} onClick={inputNumber}/>
          <Button value={2} onClick={inputNumber}/>
          <Button value={3} onClick={inputNumber}/>
          <Button value={'+'} onClick={handlerOperator}/>
          <Button value={'del'} onClick={handlerDelele}/>
          <Button value={0} onClick={inputNumber}/>
          <Button value={'.'} onClick={inputNumber}/>
          <Button value={'='} onClick={handleEquals}/>
        </Cal>
      </Content>
        <p>Make by Deborah Oliveira</p>
    </Container>
  )
}

export default App
