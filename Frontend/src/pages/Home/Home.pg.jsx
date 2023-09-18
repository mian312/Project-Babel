import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';

const Home = () => {
    const { account, setAccount } = useContext(DataContext);
    const updateAccountName = () => {
        setAccount({ ...account, name: "New Name" });
      };
    return (
        <div>
this is home
<h1>User Profile</h1>
      <p>Name: {account.name}</p>
      <p>Email: {account.email}</p>
      <button onClick={updateAccountName}>Update Name</button>
        </div>
    )
}

export default Home