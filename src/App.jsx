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
      const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}-${date.getFullYear()}`;
      dates.push(formattedDate);
    }
    return dates;
  };

  useEffect(() => {
    setDates(getLast7Days())
  }, [])



  return (
    <>
      <Header />


      <AstroCard dates={dates} />
      <BottomNav
        dates={dates}
        setDates={setDates} />

    </>
  )
}

export default App
