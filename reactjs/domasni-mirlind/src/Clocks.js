import React from 'react'
import Clock from 'react-live-clock'


export default class Clocks extends React.Component {
    render() {
      return  <Clock format={'HH:mm:ss'} ticking={true} timezone={'CEST'} />
    }
}
