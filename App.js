import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super()
    this.state={
     showMe:!true
    }
  }
operation()
{
  this.setState({
    showMe:!this.state.showMe
  })
}

  render() {
    return (
      <div>
        <h1>
          Logout Button
        </h1>
       
        <button onClick={()=>this.operation()}>Tap to show/hide</button>
        {
          this.state.showMe?
          <div>
          <button>Log out</button>
        </div>
        :null
        }
        
      </div>
    )
  }
}

export default App;
