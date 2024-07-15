import React from 'react'
import { useState } from "react";
import Backendurl from "../Back";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import '../App.css'

//import Form from '../components/Form'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await Backendurl.post("/api/user/register/", { username, password })
      alert("Registeration successful, go to login")
      navigate("/signup/login")
    }

    catch (error) {
      alert(error)
  } finally {
      setLoading(false)
  }

  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
            <h1>Registeration Form</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                Register
            </button>
        </form>
       
  
  )
}

export default Register