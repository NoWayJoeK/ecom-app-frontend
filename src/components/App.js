import React, {useState,useEffect} from "react";
import ItemPage from "./ItemPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import LoginForm from "./LoginForm"
import Header from "./NavBar"
import Cart from './Cart'


function App() {
//   const [user,setUser] = useState([])
  const [itemOrders, setItemOrders] = useState([]); 
//   useEffect(()=> {
//     fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then(users => setUser(users[0]))
// }, [])

  useEffect(()=> {
    fetch('http://localhost:3000/item_orders')
    .then(res => res.json())
    .then(itemOrders => setItemOrders(itemOrders))
  }, [])

  return (
    <Router>
      <Header />
      {/* <h1> Welcome {user.email}</h1> */}
      <Switch>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/home" component={ItemPage} />
          <Route exact path="/carts"  render = {(props) => (
            <Cart {...props} itemOrders={itemOrders}/>
          )}/>
      </Switch>
      </Router>
  );
}

export default App;

/* 
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */

      // const [button,setButton] = useState("") */}

 //   function getUser(users){
//     users.forEach(user => {
//         if (user.email === username){
//             renderMainMenu(username)
//         }else if (user.email !=username){
//             alert('Please reenter your credentials, email account does not exist')
//         }
//     })
      //} */}

      // <ItemPage />
      // <ItemPage />
      