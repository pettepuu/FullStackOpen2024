import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (<button onClick={onClick}>{text}</button>);
}

const StatisticLine = ({ text, value }) => {
  return(
    <p>{text} {value}</p>
  );
}

const Statistics = ({ good,neutral,bad,sum,totalNumberOfClicks }) => {
  if (totalNumberOfClicks == 0)
    return (
      <div>
      <h2>Statistics</h2>
      <p>Click buttons to see statistics</p>  
    </div>
  )
  return(
  <div>
    <h2>Statistics</h2>
    <StatisticLine text="good" value={good}  />
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="sum" value={sum}/>
    <StatisticLine text="average" value={sum/totalNumberOfClicks}/>
    <StatisticLine text="positive" value={good/totalNumberOfClicks}/>
  </div>
  );


  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [totalNumberOfClicks, setTotalNumberOfClicks] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setSum(sum + 1)
    setTotalNumberOfClicks(totalNumberOfClicks + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setSum(sum)
    setTotalNumberOfClicks(totalNumberOfClicks + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setSum(sum -1 )
    setTotalNumberOfClicks(totalNumberOfClicks + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGood} text='Good'/>
      <Button onClick={handleNeutral} text='Neutral'/>
      <Button onClick={handleBad} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} totalNumberOfClicks={totalNumberOfClicks}/>
    </div>
  )
}

export default App


