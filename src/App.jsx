import React, {isValidElement, useState} from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 12000,
    annualInvestment: 1200,
    expectedReturn : 6,
    duration : 10
  });

  const isInputValid = userInput.duration >= 1;

  function handleInputChange(identifier, newValue){
    setUserInput( (prevInput) => {
        return {
            ...prevInput,
            [identifier]: +newValue
        }
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangePropFunc={handleInputChange} userInput={userInput}/>
      {!isInputValid && <p className="center">Please Enter Valid Input (Duration Greater than 0)</p>}
      {isInputValid && <Results input={userInput}/>}    
    </>
  )
}

export default App
