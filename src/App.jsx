import { useState, useEffect } from 'react'

import './App.css'
import "./secondary.css"

import Header from "./components/Header"
import AstroCard from "./components/AstroCard"
import BottomNav from "./components/BottomNav"

function App() {

  const [dates, setDates] = useState([])

  // Get the last 7 dates from current date
  const getLast7Days = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split('T')[0]); // Format the date as YYYY-MM-DD
    }
    return dates
    console.log(dates[0])
  };

  useEffect(() => {
    setDates(getLast7Days())
  }, [])


  return (
    <>
      <Header dates={dates} />


      <AstroCard dates={dates} />


      <BottomNav
        dates={dates}
        setDates={setDates} />

    </>
  )
}

export default App
