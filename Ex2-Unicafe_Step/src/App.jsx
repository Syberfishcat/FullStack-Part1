import { useState } from 'react'
const Title = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) => <button onClick = {handleClick}>{text}</button>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value} {text === "positive" ? "%" : ""}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return (<p>No feedback given</p>)
  }
  return (
    <table>
      <tbody>
        <StatisticLine text = "good" value = {good} />  
        <StatisticLine text = "neutral" value = {neutral} />
        <StatisticLine text = "bad" value = {bad} />
        <StatisticLine text = "all" value = {good + neutral + bad} />
        <StatisticLine text = "average" value = {(good - bad) / (good + neutral + bad)} />
        <StatisticLine text = "positive" value = {good / (good + neutral + bad) * 100} />
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text = "give feedback"/>
      <Button text = "good" handleClick = {() => setGood(good + 1)} />
      <Button text = "neutral" handleClick = {() => setNeutral(neutral + 1)} />
      <Button text = "bad" handleClick = {() => setBad(bad + 1)} />
      <Title text = "statistics"/>
      <Statistics {...{good, neutral, bad}} />
    </div>
  )
}

export default App