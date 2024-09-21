// Components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Hooks
import { useState } from "react";
import { useForm } from "./hooks/useForm"; 

// CSS
import './App.css';

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
};

const formTemplate: FormFields = {
  name: " ",
  email: " ",
  review: " ",
  comment: " ",  
};
 
function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value};
    });
  };

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, <Thanks />];
 
  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

  return (
    <div className='app'>    
      <div className="header">
        <h2>Leave a rewiew</h2>
        <p>We are happy with your purchase. Use the form below to evaluate the product</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />            
              <span>Previous</span>
            </button>
            <button type="submit">
              <span>Next</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
