import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store from './Redux/state';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
 
  return (
    <BrowserRouter>
   <body className="app-wrapper">
     <Header />
     <Navbar />
      <div className="app-wrapper-content">
        <Route path="/Dialogs" render={ () => 
          <DialogsContainer  store = {props.store} /> }/>

        <Route path="/Profile" render={ () =>
           <Profile store={props.store}/> 
                  }/>
           
        <Route path="/News" component={News} />
        <Route path="/Music" component={Music} />
        <Route path="/Settings" component={Settings} />
      </div>
   </body>
   </BrowserRouter>
  );
}

export default App;