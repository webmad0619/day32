import React from "react";
import "./Counter.css"

export default class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            counter : 90
        }
    }

    increaseCounter() {
        let newCounter = this.state.counter
        newCounter++

        this.setState({
            counter: newCounter
        })
    }

    render() {
        return (
            <section className="counter">
                <h1>{this.state.counter}</h1>
                <button onClick = {() => this.increaseCounter()}>Click to increase the counter!</button>
            </section>
        )
    }
}