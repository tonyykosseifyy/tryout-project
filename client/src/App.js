import React, { useState , useEffect } from 'react' ;
import './App.css';
import axios from './axios' ;


function App() {
  const [ data , setData ] = useState({}) ;
  const [ loading , setLoading ] = useState(true) ;
  useEffect(() => {
    axios.get("/api")
      .then(({ data }) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },[])
  return (
    <div className="app">
      <h2>{ loading ? "loading..." : "Done => "}</h2>
      <h1>{ JSON.stringify(data)}</h1>
    </div>
  );
} ;

export default App;
