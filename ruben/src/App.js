import React from 'react';
import './App.css';
import IronPrice from './IronPrice';
import logo from "./logo.svg"

class App extends React.Component {
  constructor() {
    super()

    this.author = "dani"
    this.allSectionNames = [
      "Hola",
      "ironhackers",
      "fuenla",
      "techno",
      "house",
      "deep"
    ]

    // this.allSectionNames = [
    //   <li>Hola</li>,
    //   <li>ironhackers</li>,
    //   <li>fuenla</li>,
    // ]

    this.state = {
      prices: [
        50,
        10,
        100,
        200,
        500
      ],
      allSectionNames: this.allSectionNames.map((listItem, idx) =>
        <li
          className="test"
          key={idx}
          onClick={() => this.deleteThisSection(listItem, idx)}>{listItem}</li>
      )
    }
  }

  deleteThisSection(sectionName, sectionIndex) {
    // alert(sectionName)
    // alert(sectionIndex)

    let allSections = [...this.state.allSectionNames]
    allSections.splice(sectionIndex, 1)

    this.setState({
      ...this.state,
      allSectionNames: allSections
    })
  }

  increaseTaxes() {
    let pricesCloned = [...this.state.prices]

    let pricesWithTaxes = pricesCloned.map(price => price * 1.21)

    let newState = {
      ...this.state,
      prices: pricesWithTaxes
    }

    this.setState(newState)

    // one liners molan!
    // this.setState({
    //   ...this.state,
    //   prices: [...this.state.prices].map(price => price * 1.21)
    // })
  }

  render() {
    return (
      <div className="App">
        <ul>{this.state.allSectionNames}</ul>
        <img src={logo} alt="logo" />
        <button onClick={() => this.increaseTaxes()}>Add Taxes!</button>
        {
          this.state.prices.map((price, idx) => {
            return <IronPrice price={price} key={idx}></IronPrice>
          })
        }
      </div>
    );
  }
}

export default App;
