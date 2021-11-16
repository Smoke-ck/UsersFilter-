import React,{ useState, useEffect } from 'react'
import { getUsers, IUsers } from './api';
import List from './components/List/List';
import './App.scss';

function App() {

  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data.results));
  }, [])

  return <div className='container'>
    {users.length ? <List users={users} /> : []}
  </div>
}

export default App;
