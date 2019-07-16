import React from 'react';
import "./Tabs.css"

class Tabs extends React.Component {
    constructor() {
        super();
        this.state = {
            chosenSection : 0
        }
    }

    clickTab(chosenSectionId) {
        console.log("you have clicked a tab")
        console.log(chosenSectionId)

        this.setState({
            chosenSection : chosenSectionId
        })
    }

    render() {
        return (
            <section className="tabs-wrapper">
                <ul className="tabs">
                {
                    this.props.sections.map ((section, idx) => 
                        <li className={(this.state.chosenSection === idx) ? "tab selected" : "tab"} key={idx} onClick={() => this.clickTab(idx)}>{section}</li>
                    )
                }
            </ul>
            </section>
        )
    }

}

export default Tabs;