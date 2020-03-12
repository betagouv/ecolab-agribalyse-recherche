import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data';
import $ from 'jquery';


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
      margin: '5vh',
      width: '50px',
      borderStyle: 'none none solid',
      borderWidth: '1px 1px 3px',
      borderColor: '#000',
      borderRadius: '0px',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '1px',
    }
    const items = Data.filter((data)=>{
    result = this.state.search
      if(result == null) {
        result = 0
          return data
      }
      else {
          return data
      }




    }).map((data, index)=>{
      return(

          <div id="container">


            <div id="cercles">
                <div style={{
                  position: 'absolute',
                  top: (result * 500 /104) - (result * data.kmperkg /104),
                  left: (result * 500 /104) - (result * data.kmperkg /104),
                  right: '0px',
                  bottom: '0px',
                  width: result * data.kmperkg * (2/104),
                  height: result * data.kmperkg * (2/104),
                  backgroundColor: 'transparent',
                  border: 'solid 1.2em',
                  borderColor: data.color,
                  borderRadius:'50%',
                  zIndex: index + 2,
                 }}></div>
            </div>


            <div id="emojis">
                <div style={{
                  position: 'absolute',
                  top: (result * 500 /104) - (result * data.kmperkg /104),
                  left: (result * 500 /104) - (result * data.kmperkg /104),
                  right: '0px',
                  bottom: '0px',
                  fontSize: '30px',
                  zIndex: 100,
                 }}
                 >{data.emoji}


                <p style={{
                  fontSize: '12px',
                }}
                >{result * data.kmperkg}km</p>

                 </div>
            </div>


          </div>




      )
    })

    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '100px',}}>
      <p>Avec</p>
      <input value={this.state.value} type="text" placeholder="Nb" style={elementStyle} onChange={(e)=>this.searchSpace(e)}
      />
      <p>kg de CO2, je peux parcourir</p>




      {items}
      </div>


    )
  }
}

export default App;
