import './App.css';
import React, {useState,useEffect} from 'react';

function App(){
  const url = 'https://api.github.com/users'
  const [users, setUsers] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setUsers(responseJSON)
    //console.log(responseJSON)
  }
  useEffect(() =>{
    fetchApi()
  }, [])
  return (
    <div className="App">
    <ul>
      { !users ? 'cargando...' : 
        users.map( (user,index) =>{
         return <li key={index} > {user.login}</li>
      })
      }
    </ul>
    </div>
  );
}

export default App;