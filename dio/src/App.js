import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

import { Container, Content, Row } from "./styles";

const App = () => {

const [currentNumber, setCurrentNumber] = useState(0);
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState('0');

const handleOnclear = () => {
  setCurrentNumber('0');
  setFirstNumber('0');
  setOperation('')
};

const handleAddnumber = (number) => {
    setCurrentNumber (prev => `${prev === '0' ? '' : prev}${number}`);
};

const handleSumNumbers = () => {

  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('+');
  } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')
  };
};

const handleMinusNumbers = () => {

  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('-');
  } else {
    const sum = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')
  };
};

const handleDivNumbers = () => {

  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('/');
  } else {
    const sum = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')
  };
};

const handleMultiNumbers = () => {

  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('*');
  } else {
    const sum = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')
  };
};

const handleEquals = () => {

  if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
   switch(operation){
    case '+':
      handleSumNumbers();
      break;
        case '-':
        handleMinusNumbers();
        break;
          case '/':
          handleDivNumbers();
          break;
            case '*':
            handleMultiNumbers();
            break;
      default:
        break;
   }
  }; 
};


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleOnclear}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="*" onClick={handleMultiNumbers}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddnumber ('7')}/>
          <Button label="8" onClick={() => handleAddnumber ('8')}/>
          <Button label="9" onClick={() => handleAddnumber ('9')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddnumber ('4')}/>
          <Button label="5" onClick={() => handleAddnumber ('5')}/>
          <Button label="6" onClick={() => handleAddnumber ('6')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddnumber ('1')}/>
          <Button label="2" onClick={() => handleAddnumber ('2')}/>
          <Button label="3" onClick={() => handleAddnumber ('3')}/>
          <Button label="0" onClick={() => handleAddnumber ('0')}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
