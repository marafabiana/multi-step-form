import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai';
import {FiSend} from 'react-icons/fi';

import "./Steps.css";

type stepsProps = {
    currentSteps: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className='steps'>
        <div className='step active'>
            <AiOutlineUser />
            <p>Identification</p>
        </div>

        <div className={`step ${currentStep >= 1 ? "active" : " " }`}>
            <AiOutlineStar />
            <p>Customer review</p>
        </div>

        <div className={`step ${currentStep >= 2  ? "active" : " " }`}>
            <FiSend />
            <p>Send</p>
        </div>
    </div>
  )
}

export default Steps