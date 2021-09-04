import React from "react";
import { Stats } from "./Statistics.styled";
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive: {Number.isNaN(positivePercentage) ? 0 : positivePercentage}%
      </li>
    </Stats>
  );
};
