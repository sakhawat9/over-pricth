import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [friends, setFriends] = useState([])
  useEffect(() =>{
    fetch(`https://randomuser.me/api/?results=500`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setFriends(data.results)})
  }, [])

  // const friends = [{name: 'Robin', age: 20}, {name: 'Sojib', age: 23}, {name: 'Abir', age: 20}, {name: 'Titu', age: 23}, {name: 'Shohid', age: 22}]
  return (
    <div className={"App"}>
      <FriendCount></FriendCount>
      {
        friends.map(fr => <Friends name={fr.name.first} email={fr.email} key={fr.id.value} age={fr.dob.age} gender={fr.gender} country={fr.location.country} city={fr.location.city} picture={fr.picture.large}></Friends>)
      }
    </div>
  );
}
function FriendCount(){
  const [count, setCount] = useState(0);
  
  const handleClick = () => setCount(count + 1); 

  return(
    <div >
      <button onClick={handleClick}>Add Count</button>
      <h3>Toatal friend : {count}</h3>
      <FriendDisplay friend = {count}></FriendDisplay>
      <FriendDisplay friend = {count + 5}></FriendDisplay>
      <FriendDisplay friend = {count + 2}></FriendDisplay>
    </div>
  )
}

function FriendDisplay(props){
  return(
    <div>
      <h4>New friend count : {props.friend}</h4>
    </div>
  )
}

function Friends(props) {
  const friendStyle = {
    border: '2px solid #6047EC',
    margin: '10px',
    width: '400px',
    backgroundColor: '#DEE1E6',
  }
  return (
    <div style={friendStyle}>
      <img src={props.picture} alt="picture"/>
      <h3>Friend Name : {props.name}</h3>
      <p>Email : {props.email}</p>
      <p><span>Gender : {props.gender},</span><span> Age : {props.age}</span></p>
      <p><span>City : {props.city},</span> <span> Country : {props.country}</span></p>
    </div>
  )
}

export default App;
