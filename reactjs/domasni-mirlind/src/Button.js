import React from 'react'


// STATE {} - SOSTOJBA = vnatresni podatoci vo komponentata
// PROPS {} - PROPERTIES = podatoci koi idat od parent komponentata

class Button extends React.Component {

  // se povikuva pred render
  constructor(props) {
    super(props)

    this.initialState = {
      name: ' Koco'
    }

    this.state = this.initialState
  }


  alertMe = () => {
    alert(`${this.props.greeting} ${this.state.name}`)
  }

  changeName = (event) => {
    const value = event.target.value


    this.setState({ name: value })

  

    if (!value) {
      this.setState(this.initialState)
    }

  }

  // render metodot se povikuva posle constructorot
  // render metodot se povikuva posle SEKOJA PROMENA na  ili props
  render = () => {
    return (
      <div>
        <button
          id='welcome'
          className='test'
          onClick={this.alertMe}
        >
          Greet me!
        </button>

        <input onChange={this.changeName} />

        <div>
          { this.props.greeting }
          { this.state.name }
        </div>
      </div>
    )
  }
}


export default Button