import React from "react";

export default class IronPrice extends React.Component {
    constructor() {
        super()

        this.state = {
            currencySymbol: "€"
        }
    }

    render() {
        return (
            <p>{this.props.price} {this.state.currencySymbol}</p>
        )
    }
}