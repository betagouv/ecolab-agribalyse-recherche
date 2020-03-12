import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data';

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let kgCO2 = event.target.value;
    this.setState({value: kgCO2});
    this.setState({search:kgCO2})
  }

  render(){

    let result = 0

    const cercleValeur = {
    }

    const elementStyle ={
      backgroundColor: 'transparent',
      margin: '9vh',
      width: '200px',
      borderStyle: 'none none solid',
      borderWidth: '1px 1px 3px',
      borderColor: '#000',
      borderRadius: '0px',
      fontFamily: 'sans-serif',
      fontSize: '28px',
      lineHeight: '40px',
      letterSpacing: '1px',
    }
    const items = Data.filter((data)=>{
    result = this.state.search
      if(result == null)
          return
      else {
          return data
      }

    }).map((data, index)=>{
      return(
      <div>
      <div id="container">

        <div id="cercles">
            <div style={{
              position: 'absolute',
              top: (result * 500 /52) - (result * data.kmperkg /52),
              left: (result * 500 /52) - (result * data.kmperkg /52),
              right: '0px',
              bottom: '0px',
              width: result * data.kmperkg * (2/52),
              height: result * data.kmperkg * (2/52),
              backgroundColor: 'transparent',
              border: 'solid 2em',
              borderColor: data.color,
              borderRadius:'50%',
              zIndex: index + 2,
             }}
             ></div>
        </div>
      </div>
      </div>
      )
    })

    return (
      <div>
      <input value={this.state.value} type="text" placeholder="Nb de kg/Co2" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default App;
