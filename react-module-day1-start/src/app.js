import React, { Component } from "react";
import "./App.css";
import Tabs from "./Tabs";
import IronButton from "./IronButton";
import Counter from "./Counter";

class App extends Component {
    constructor() {
        super()

        this.state = {
            sections : [
                "Ironhack web development",
                "Ironhack student platform",
                "Ironhackers reacting"
            ], 
            sections2: [
                "Ironhack web development",
                "Ironhack student platform",
            ]
        }
    }

    addNewSection() {
        this.state.sections.push("new section hello!!!!")
        this.setState(this.state)
    }

    render() {
        return (
            <div className="App">
                {/* <IronButton text="Hola chicos"></IronButton>
                <IronButton text="Qué tal"></IronButton>
                
                <button onClick={() => this.addNewSection()}>Add new section in the tabs</button>
                <Tabs sections={this.state.sections}></Tabs>
                <Tabs sections={this.state.sections2}></Tabs>

                <IronButton text="Prueba"></IronButton> */}

                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
            </div>
        );
    }
}

export default App;