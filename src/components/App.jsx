import {Component} from 'react'
export class App extends Component {
    // constructor(){
    //   super()
    //   this.state ={
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    //   }
    // }
    state ={ good: 0,
           neutral: 0,
           bad: 0,
    }

    countGoodStatistics=()=>{
     this.setState((prevState)=>{
      return {good: prevState.good + 1}
     })
    }
     countNeutralStatistics=()=>{
      this.setState((prevState)=>{
       return {neutral: prevState.neutral + 1}
      })
    }
      countBadStatistics=()=>{
        this.setState((prevState)=>{
         return {bad: prevState.bad + 1}
        })
     }

     countTotalFeedback =()=>{
      const { good, neutral, bad } = this.state;
      const values = Object.values({ good, neutral, bad });
    return values.reduce((total, value) => total + value, 0)
     }

     countPositiveFeedbackPercentage=()=>{
      const { good } = this.state;
  const totalFeedback = this.countTotalFeedback();
  if (totalFeedback === 0) {
    return 0}
  const percentage = (good / totalFeedback) * 100;
  return parseInt(percentage)
  }
          
    render() {
    return ( 
      <div>
        <button type ='button' className='good-btn' onClick={this.countGoodStatistics}>Good</button>
        <button  type ='button' className='neutral-btn' onClick={this.countNeutralStatistics}>Neutral</button>
        <button  type ='button' className='bad-btn'onClick={this.countBadStatistics}>Bad</button>
    <p>Good: {this.state.good}</p>
      <p>Neutral: {this.state.neutral}</p>
      <p>Bad: {this.state.bad}</p>
      <p >Total: {this.countTotalFeedback()}</p>
      <p > Рercentage: {this.countPositiveFeedbackPercentage()} %</p>
      </div>
        )
  }
  // return (
  //   <div
  //   >
  //     <p>Good</p>
  //     <p>Neutral</p>
  //     <p>Dad</p>
  //   </div>
  // );
};
