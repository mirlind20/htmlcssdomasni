import React from 'react'
import './App.css'
import './center.css'
import Mirlind from './Mirlind'
import Photo from './Photo'
import Button from './Button'

class App extends React.Component {

  render = () => {
    return (
      <div>
        <h1>Welcome to my first react webpage!</h1>
        <Photo  />
        <Mirlind />
        <Button />
        
      </div>
    )
  }
}

export default App


