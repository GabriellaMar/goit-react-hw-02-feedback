import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export class App extends Component {
  // constructor(){
  //   super()
  //   this.state ={
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  //   }
  // }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countFeedbackStatistics = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    })
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const values = Object.values({ good, neutral, bad });
    return values.reduce((total, value) => total + value, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0
    }
    const percentage = (good / totalFeedback) * 100;
    return parseInt(percentage)
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <div>
         <Section title="Please leave Feedback"> 
          < FeedbackOptions 
          options={['good', 'neutral', 'bad']}
           onLeaveFeedback={this.countFeedbackStatistics} />
         </Section > 

         <Section title="Statistic"> 
         
         { totalFeedback === 0
         ? (<Notification message="There is no feedback" />)
         :( <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
          )}
           </Section > 
      </div>
    )
  }
};
