import axios from "axios";
import {useState, useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Login"
import Output from "./Output"

import UserContext from "../Contexts/UserContext.js";
import "./App.css"


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{
      user, setUser,
      token, setToken
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Output" element={<Output />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    )
}

export default App;