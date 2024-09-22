import { ReactElement } from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

import "./Thanks.css";

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h3>Here is the summary of your review {data.name}:</h3>
      <p className="review-data">
        <span>Rate:</span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comment:</span> {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
