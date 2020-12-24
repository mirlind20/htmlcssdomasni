import React from 'react'

export default class Calc extends React.Component {
constructor(props) {
    super(props)

    this.initialState={
        result: 0,
    }

    this.state = this.initialState
    this.state = {
        result: Number(''),
        value1: Number(''),
        value2: Number('') ,
    } 

    
}
changeNr1 = (event) =>{
    const value1 = Number(event.target.value)
    this.setState({
        value1: value1
    })
}


changeNr2 = (event) =>{
    const value2 = Number(event.target.value)
    this.setState({
        value2: value2
    })
}

add = () =>{
    
    this.setState({result:this.state.value1 + this.state.value2})
}

divide = () =>{
   
    this.setState({result: this.state.value1 / this.state.value2})


}

multiply = () =>{
   
    this.setState({result: this.state.value1 * this.state.value2})
}

extract = () =>{
   
    this.setState({result: this.state.value1 - this.state.value2})
}



  render = () => {
    return (
      <div>
        <div>
          <input placeholder='First number' onChange={this.changeNr1}></input>
        </div>
        <div>
          <input placeholder='Second number' onChange={this.changeNr2}></input>
        </div>
        <div>
         <button onClick ={this.add}>Add</button>
         <button onClick ={this.divide}>Divide</button>
         <button onClick ={this.multiply}>multiply</button>
         <button onClick ={this.extract}>extract</button>
        </div>
        <div>
          Result=<span>{this.state.result}</span>
        </div>
      </div>
    )
  }
}