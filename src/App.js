import React, { Component } from 'react';
import Appcss from './Appcss.css';
import {Switch, Route} from 'react-router-dom'

import Profile from './pages/Profile'
import Navigation from './components/Navigation'
import Experience from './pages/Experience'
import Menu from './pages/Menu'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'

class App extends Component {
  render() {
    return (
      <div className={Appcss.container}>
        <div className={Appcss.mainContent}>
            <Menu/>
            <div className={Appcss.mainInfo}>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Profile}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contacts'  component={Contacts}/>
                </Switch>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
