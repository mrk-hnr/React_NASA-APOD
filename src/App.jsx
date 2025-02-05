import { useState, useEffect } from 'react'
import { getLast7Days } from "../src/utility"

import './App.css'
import "./secondary.css"

import Header from "./components/Header"
import AstroCard from "./components/AstroCard"
import BottomNav from "./components/BottomNav"

function App() {

  const [dates, setDates] = useState([])
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setDates(getLast7Days())
  }, [])






  return (
    <>
      <Header dates={dates} />

      <AstroCard dates={dates} selectedDate={selectedDate} />

      <BottomNav dates={dates} setSelectedDate={setSelectedDate} />

    </>
  )
}

export default App
