import React, { useEffect, useState} from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState([])

  const fetchMessageData = () => {
    fetch("http://192.168.1.3:5001")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMessage(data)
      })
  }

  useEffect(() => {
    fetchMessageData()
  }, [])

  return (
    <div className="App">
      <h1>{message.msg}</h1>
    </div>
  );
}

export default App;
