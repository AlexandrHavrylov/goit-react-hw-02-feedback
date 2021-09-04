import React from "react";
import { Button } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <Button feedbackType="good" onClick={() => onLeaveFeedback("good")}>
        Good
      </Button>
      <Button feedbackType="neutral" onClick={() => onLeaveFeedback("neutral")}>
        {" "}
        Neutral
      </Button>
      <Button feedbackType="bad" onClick={() => onLeaveFeedback("bad")}>
        {" "}
        Bad
      </Button>
    </div>
  );
};
