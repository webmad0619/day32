import React from 'react';
import "./Product.css"
import offerLogo from "./offer-label.png"

export default class Product extends React.Component {
    render() {
        return (
            <section className="product">
                {
                    this.props.isOffer ?
                        <img className="logo-badge" src={offerLogo} alt="in offer" />
                        :
                        null
                }
                <h2>{this.props.name}</h2>
                <img src={this.props.imgSrc} alt={this.props.name} />
                <span className="price">{this.props.price} $ {
                    this.props.isOffer ?
                        <span>(in offer!)</span>
                        :
                        null
                }</span>
            </section>
        )
    }
}