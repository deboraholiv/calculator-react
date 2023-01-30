import Button from "./components/Button"
import Display from "./components/Display"
import { Container, Content, Cal } from "./styles"
import { useState } from "react"

function App() {

  const[number, setNumber] = useState(0)
  const[secondNumber, setSecondNumber] = useState(0)
  const [operation, setOperation] = useState()

  const inputNumber = (e) =>{
    if(number===0) {
      setNumber(e.target.value)
    }else{
      setNumber(number + e.target.value)
    }
  }

  const handlerOnClear = () => {
    setNumber(0)
    setSecondNumber(0)
    setOperation('')
  }
  
  const handlerDelele = () =>{
    if(number===0){
      setNumber(0)
    }else if(number.length === 1){
      setNumber(0)
    }else{
      setNumber(number.substring(0, number.length - 1))
    }
  }

  const handlerPorcent = () => {
    setNumber(number/100)
  }

  const handlerSing =() => {
    if(number>0) {
      setNumber(-number)
    }else{
      setNumber(Math.abs(number))
    }
  }

  const handlerOperator = (e) => {
    setOperation(e.target.value)
    setSecondNumber(number);
    setNumber(0)
  }

  const handlerCalculate = () => {
    switch(operation){
      case '+':
        setNumber(parseFloat(secondNumber) + parseFloat(number));
        break;
      case '-':
        setNumber(parseFloat(secondNumber) - parseFloat(number));;
        break;
      case 'x':
        setNumber(parseFloat(secondNumber) * parseFloat(number));
        break;
      case '/':
        setNumber(parseFloat(secondNumber) / parseFloat(number));
        break;
      default: 
        break;
    }
  }


  return (
    <Container>
      <h1>A Simple Calculator</h1>
      <Content>
        <Display value={number}/>
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
          <Button value={'='} onClick={handlerCalculate}/>
        </Cal>
      </Content>
        <p>Make by Deborah Oliveira</p>
    </Container>
  )
}

export default App
