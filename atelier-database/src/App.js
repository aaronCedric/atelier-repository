import React, {Component} from 'react'
import MaterialList from './components/MaterialList'
import NavBar from './components/NavBar'
import ScrollUp from './components/ScrollUp';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MaterialList />
        <ScrollUp />
      </div>
    )
  }
}


export default App