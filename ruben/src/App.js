import React from 'react';
import './App.css';
import IronPrice from './IronPrice';
import logo from "./logo.svg"
import Product from './Product';
import ProductDisplayer from './ProductDisplayer';

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

    // this.state = {
    //   prices: [
    //     50,
    //     10,
    //     100,
    //     200,
    //     500
    //   ],
    //   allSectionNames: this.allSectionNames.map((listItem, idx) =>
    //     <li
    //       className="test"
    //       key={idx}
    //       onClick={() => this.deleteThisSection(listItem, idx)}>{listItem}</li>
    //   )
    // }

    this.state = {
      visible: true,
      products: [
        {
          name: "Rose",
          imgSrc: "https://i.pinimg.com/originals/fc/95/88/fc95887d0b1ab9f8d12fc468d1ff861e.jpg",
          price: 12,
          isOffer: true
        },
        {
          name: "Rose1",
          imgSrc: "https://s3.envato.com/files/243379154/06511EOS%206D%20Mark%20II10-03-2018.jpg",
          price: 41,
          isOffer: false
        },
        {
          name: "Rose2",
          imgSrc: "https://nurserylive.com/images/stories/virtuemart/product/nurserylive-balsamine-rose-flower-seeds1.jpg",
          price: 40,
          isOffer: true
        },
        {
          name: "Rose3",
          imgSrc: "https://nurserylive.com/images/stories/virtuemart/product/nurserylive-balsamine-rose-flower-seeds1.jpg",
          price: 10,
          isOffer: !false
        }
      ]
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

  toggleVisibility() {
    let isVisible = this.state.visible;

    let isVisibleModified = !isVisible;

    this.setState({
      ...this.state,
      visible: isVisibleModified
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.toggleVisibility()}>Click to toggle product displayer visibility</button>

        {/* {
          this.state.visible ? <ProductDisplayer products={this.state.products}></ProductDisplayer> : null
        } */}

        {
          this.state.visible && <ProductDisplayer products={this.state.products}></ProductDisplayer>
        }

        {/* <ul>{this.state.allSectionNames}</ul>
        <img src={logo} alt="logo" />
        <button onClick={() => this.increaseTaxes()}>Add Taxes!</button>
        {
          this.state.prices.map((price, idx) => {
            return <IronPrice price={price} key={idx}></IronPrice>
          })
        } */}
      </div>
    );
  }
}

export default App;
