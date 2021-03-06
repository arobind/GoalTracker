import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
function App() {
 const [usersList, setUsersList]=useState([]);
  const addUserHandler = (uName, uAge)=>{
    setUsersList(prev => [...prev, {name:uName, age:uAge}])
  };
 return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length && <UsersList users = {usersList}/>}
    </div>
  );
}

export default App;
