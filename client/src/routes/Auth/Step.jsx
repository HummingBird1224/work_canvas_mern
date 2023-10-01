import {  useEffect, useState } from "react";

import Alert from '../../components/Alert/Alert';
import { Link } from 'react-router-dom';
import './Auth.css';

import Step1 from './../Auth/Register/Steps/Step1';
import Step2 from './../Auth/Register/Steps/Step2';
import Step3 from './../Auth/Register/Steps/Step3';
import Step4 from './../Auth/Register/Steps/Step4';


const Step = () => {

  const [step, setStep] = useState(1);

  const clickPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  const clickNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  return (
    <div className="modal__body">
      { step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : step === 3 ? <Step3 /> : <Step4 />}

      <div className="wrapper--button">
        {/* <button className="button go-prev" onClick={() => clickPrev()}>戻る</button> */}
        {/* <button className={ step === 4 ? 'button button--type_primary button--state_disabled' : 'button button--type_primary go-next' } onClick={() => clickNext()}>次に進む</button> */}
        <button className={ step === 1 ? 'button go-prev button--state_disabled' : 'button go-prev' } onClick={() => clickPrev()}>戻る</button>
        <button className="button button--type_primary go-next" onClick={() => clickNext()}>次に進む</button>
      </div>

    </div>
  );
}

export default Step;