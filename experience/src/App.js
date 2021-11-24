import React from 'react';
import './App.css';

class App extends React.Component {

  styles ={
    displayNone       : 'displayNone',
    signUpdefault     : 'signUpFrame',
    signIndefault    : 'signInFrame',
    loginActiveDefault : 'loginActive',
    loginActiveClick : 'loginActiveClick',

  }

  constructor(){
    super()
    
    this.state = {
      signUpFrameClass :  this.styles.signUpdefault,
      signInFrameClass :  this.styles.displayNone,
      loginActiveClass :  this.styles.loginActiveDefault
    }
  }

  handleOnClick = () => {
    if(this.state.signUpFrameClass === this.styles.signUpdefault){
      this.setState({
        signUpFrameClass : this.styles.displayNone,
        signInFrameClass : this.styles.signIndefault,
        loginActiveClass : this.styles.loginActiveDefault
      })
    }else{
      this.setState({
        signUpFrameClass : this.styles.signUpdefault,
        signInFrameClass : this.styles.displayNone,
      })
    }
    
  
  console.log('Button Clicked');
  }

  render() {
    return (
      <div className="Frame">
        <div>
          <form className={this.state.signUpFrameClass}>
            <h2> Welcome!! </h2>
            <fieldset className="field-1" >
              <ul className="container">
                <li className="input_wrapper">
                  <label htmlFor="username">Username:</label>
                  <input className="input1" type="text" id="username" required />
                </li>
                <li className="input_wrapper">
                  <label htmlFor="password">Password:</label>
                  <input className="input1" type="password" id="password" required />
                </li>
                <li className="input_wrapper">
                  <label htmlFor="email">Email:</label>
                  <input className="input1" type="email" id="email" required />
                </li>
                <li className="input_wrapper">
                  <label htmlFor="date">Date:</label>
                  <input className="input1" type="date" id="date" required />
                </li>
              </ul>
            </fieldset>
            <button className="signUp">Sign Up</button>
          </form >
        </div>
        <div>
        </div>
        <div>
          <form className={this.state.signInFrameClass}>
            <fieldset className="field-2">
              <ul className="container2">
                <li className="input_wrapper2">
                  <label className="label2" htmlFor="username">Username:</label>
                  <input className="input2" type="text" id="username" required />
                </li>
                <li className="input_wrapper2">
                  <label className="label2" htmlFor="password">Password:</label>
                  <input className="input2" type="password" id="password" required />
                </li>
              </ul>
            </fieldset>
            <a href="#">Forgot password?</a>
          </form >
        </div>
        <div  className={this.state.loginActiveClass} onClick={this.handleOnClick}> <h5>Change</h5> </div>
      </div>
    );
  }
}

export default App;


