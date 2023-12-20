import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./components/Main"
import Add from "./components/Add"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/add" element={<Add />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
