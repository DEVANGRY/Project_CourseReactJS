import React from "react";
import "./Accordion.css";
class Accordion extends React.Component {
    constructor(props) {
        super();

        this.state = { isOpen: false };
    }

    hanldeClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <>
                <h3 className="acc_title" onClick={this.hanldeClick}>
                    {this.props.title}
                </h3>
                {this.state.isOpen && (
                    <div className="acc_desc">{this.props.children}</div>
                )}
            </>
        );
    }
}
export default Accordion;
