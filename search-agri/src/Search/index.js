import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import blankImg from "./blank.gif";

import "./style.css";
import "./flags.min.css";

import alimentsList from "./data2.json";

class App extends Component {
  state = {
    search: ""
  };

  renderAliment = aliment => {
    const { search } = this.state;
    var ciqual_code = aliment.ciqual_code.toLowerCase();

    /*if( search !== "" && aliment.nom_francais.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-3" style={{ marginTop: "20px", }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                // src={blankImg}
                // className={"flag flag-" + ciqual_code}
              />
            </p>
            <CardTitle title={aliment.name}>
              {aliment.nom_francais.substring(0, 50)}
              {aliment.nom_francais.length > 20 && "..."}
            </CardTitle>
            <CardText text={aliment.name}>
              {aliment.sous_groupe}
            </CardText>
            <div style={{ display: "flex", justifyContent: "space-between", }}>
              <CardText text={aliment.name}>
                {aliment.Livraison}
              </CardText>
              <Button href="#">Détail</Button>
            </div>

          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredAliments = alimentsList.filter(aliment => {
      return aliment.nom_francais.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div classnom_francais="flyout">
        <main style={{ marginBottom: "4em", }}>
          <div classnom_francais="container">

            <div className="banner" style={{ padding: "3em", height: "55vh", display: "flex", flexDirection: "column", justifyContent: "space-around", }}>
                  <div classnom_francais="row">
                    <div classnom_francais="col-12">

                        <h3>
                          Cherche l'impact de ton assiette
                        </h3>

                    </div>
                    <div classnom_francais="col">
                      <Input
                        label="Fraise, café, pizza... chercher un aliment ou plat"
                        icon="search"
                        onChange={this.onchange}
                        style={{ width: "60vh", }}
                      />
                    </div>
            </div>
              <div classnom_francais="col" />
            </div>
            <div style={{ display: "flex", padding: "1em", }}>
              <a href="https://www.w3schools.com" target="_blank" style={{ marginRight: "2em", marginLeft: "1em", }}>Accueil</a>
              <p style={{ marginRight: "2em", }}> > </p>
              <a href="https://www.w3schools.com" target="_blank" style={{ marginRight: "2em", }}>Rechercher</a>
              <p style={{ marginRight: "2em", }}> > </p>
              <a href="https://www.w3schools.com" target="_blank">{ search }</a>
            </div>

            <div classnom_francais="row" style={{ display: "flex", }}>
              {filteredAliments.map(aliment => {
                return this.renderAliment(aliment);
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

