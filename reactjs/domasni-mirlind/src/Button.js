import React from 'react'

class Button extends React.Component {

  render() {
    return (
      <div className ='container'>
        <a href='https://semosedu.com.mk/Home_page.aspx' target="_blank" rel="noreferrer">
        <button className='color-button'>
          Welcome To Semos
        </button>
        </a>
      </div>
    )
  }
}
export default Button