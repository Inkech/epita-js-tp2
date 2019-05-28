import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};


class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false,
    };
  }

  handleMouseOver = () => {
    if (this.props.value == null)
      this.setState({isMouseOver: true});
  }

  handleMouseOut = () => {
    this.setState({isMouseOver: false});
  }



 
  render() {
    return (
      <div onMouseOver={this.handleMouseOver}
           onMouseOut={this.handleMouseOut}
           onClick={this.props.onClick}
           style={{...cellStyle, backgroundColor: (this.state.isMouseOver && !this.props.value) ? "yellow" : "white"}}>
           {this.props.value}
      </div>
    );
  }
}

export default Cell;
