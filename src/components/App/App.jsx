import React, { Component } from "react";
import { Statistics } from "../Feedback/Statistics";
import { FeedbackOptions } from "components/Feedback/FeedbackOptions ";
import { Section } from "components/Feedback/Section";
import { Notification } from "components/Feedback/Notification";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  statCounter = (type) => {
    this.setState((prevState) => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback() {
    this.total = this.state.good + this.state.neutral + this.state.bad;
    return this.total;
  }

  countPositiveFeedbackPercentage() {
    this.positiveFeedbackPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return this.positiveFeedbackPercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    const positive = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.statCounter}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}
