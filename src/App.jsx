import { useState } from 'react'

import './App.css'
import "./secondary.css"

import Header from "./components/Header"
import AstroCard from "./components/AstroCard"
import BottomNav from "./components/BottomNav"

function App() {


  return (
    <>
      <Header />
      <AstroCard />
      <BottomNav />

    </>
  )
}

export default App
