import React, { useState } from 'react';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

const options = [
  { id: 'id-1', label: 'good' },
  { id: 'id-2', label: 'neutral' },
  { id: 'id-3', label: 'bad' },
];

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = label => {
    switch (label) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.warn('Invalid button type');
    }
  };
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good * 100) / countTotalFeedback,
  );

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleButtonClick} />
      {countTotalFeedback === 0 ? (
        <Notification message="No feedback messages" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </Section>
  );
}

export default Feedback;
