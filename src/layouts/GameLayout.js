import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      gamestate: "stale",
    };

  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    let cells = state.cells;

    let win = false;

    for (let i = 0; i < 9; i += 3) {
      if (cells[i] != null && cells[i] === cells[i + 1] && cells[i] === cells[i + 2])
        win = true;
    }

    for (let i = 0; i < 3; i++) {
      if (cells[i] != null && cells[i] === cells[i + 3] && cells[i] === cells[i + 6])
        win = true;
    }

    if (!win) {
      win = (cells[0] != null && cells[0] === cells[4] && cells[0] === cells[8]) || (cells[2] != null && cells[2] === cells[4] && cells[2] === cells[6]);
    }

    if (win) {
      state.gamestate = 'win';
      if (state.currentPlayer == 'player 1')
        state.currentPlayer = 'player 2';
      else
        state.currentPlayer = 'player 1';
    }
    return state;
  }



  handleClick = (i) => {
    if (this.state.gamestate == 'win') {
      return;
    }
    var newCells = this.state.cells;
    if (this.state.cells[i] == null) {
      if (this.state.currentPlayer === "player 1") {
        newCells[i] = 'X';
        this.setState({currentPlayer: "player 2", cells: newCells})
      }
      else {
        newCells[i] = 'O';
        this.setState({currentPlayer: "player 1", cells: newCells})
      }
    }
    else {
      return;
    }
  }

  render() {

    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo currentPlayer={this.state.currentPlayer} gameState={this.state.gamestate} />
        <Board cells={this.state.cells} onClick={i => this.handleClick(i)} />
      </div>
    );
  }
}

export default GameLayout;
