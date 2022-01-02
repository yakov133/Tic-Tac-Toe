import React, { Component } from "react";
import * as style from "./style.module.css";

export default class TicTacToe extends Component {
  state = {
    arrTd: [],
    turn: localStorage.turn ? true : false,
    count: 0,
    X: localStorage.X ? JSON.parse(localStorage.getItem("X")) : 0,
    draw: localStorage.draw ? JSON.parse(localStorage.getItem("draw")) : 0,
    O: localStorage.O ? JSON.parse(localStorage.getItem("O")) : 0,
    line: "",
    win: true,
  };

  Arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  draw = (e, index) => {
    let temp = [...this.state.arrTd];
    temp.push(e.target);
    if (!e.target.innerText) {
      if (this.state.turn) {
        e.target.innerText = "X";
      } else {
        e.target.innerText = "O";
      }
      this.arrChang(index);
      this.setState({
        turn: !this.state.turn,
        count: this.state.count + 1,
        arrTd: temp,
      });
      if (this.state.count >= 4) this.checkVictory();
    }
  };

  arrChang = (index) => {
    let temp = [[], [], []];
    temp = [...this.Arr];

    let seconedArr = index <= 2 ? 0 : index <= 5 ? 1 : 2;
    let stam = [];
    stam = [...temp[seconedArr]];
    stam[index % 3] = this.state.turn ? 2 : 1;
    temp[seconedArr] = stam;
    this.Arr = [...temp];
  };

  checkVictory = () => {
    //! X win at row 1
    if (this.checkRows(0, 2)) {
      console.log("X win at first line");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "line1" });
    }
    //! X win at row 2
    else if (this.checkRows(1, 2)) {
      console.log("X win at second line");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "line2" });
    }
    //! X win at row 3
    else if (this.checkRows(2, 2)) {
      console.log("X win at theerd line");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "line3" });
    }
    //! X win at col 1
    else if (this.checkColumns(0, 2)) {
      console.log("X win at first coleom");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "col1" });
    }
    //! X win at col 2
    else if (this.checkColumns(1, 2)) {
      console.log("X win at second coleom");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "col2" });
    }
    //! X win at col 3
    else if (this.checkColumns(2, 2)) {
      console.log("X win at theerd coleom");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "col3" });
    }
    //! X win at right diagonal
    else if (this.rightDiagonal(2)) {
      console.log("X win at right diagonal");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "rgiht_Diagonal" });
    }
    //! X win at left diagonal
    else if (this.leftDiagonal(2)) {
      console.log("X win at left diagonal");
      localStorage.setItem("X", this.state.X + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ X: this.state.X + 1, line: "left_Diagonal" });
    }

    // O
    //! O win at row 1
    else if (this.checkRows(0, 1)) {
      console.log("O win at first line");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "line1" });
    }
    //! O win at row 2
    else if (this.checkRows(1, 1)) {
      console.log("O win at second line");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "line2" });
    }
    //! O win at row 3
    else if (this.checkRows(2, 1)) {
      console.log("O win at theerd line");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "line3" });
    }
    //! O win at col 1
    else if (this.checkColumns(0, 1)) {
      console.log("O win at first coleom");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "col1" });
    }
    //! O win at col 2
    else if (this.checkColumns(1, 1)) {
      console.log("O win at second coleom");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "col2" });
    }
    //! O win at col 3
    else if (this.checkColumns(2, 1)) {
      console.log("O win at theerd coleom");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "col3" });
    }
    //! O win at right diagonal
    else if (this.rightDiagonal(1)) {
      console.log("O win at right diagonal");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "rgiht_Diagonal" });
    }
    //! O win at left diagonal
    else if (this.leftDiagonal(1)) {
      console.log("O win at left diagonal");
      localStorage.setItem("O", this.state.O + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ O: this.state.O + 1, line: "left_Diagonal" });
    } else if (this.checkDraw()) {
      console.log("DRAW !!!");
      localStorage.setItem("draw", this.state.draw + 1);
      localStorage.setItem("turn", this.state.turn ? "" : true);
      this.setState({ draw: this.state.draw + 1 });
    }
  };

  checkRows = (row, num) => {
    return this.Arr[row][0] === this.Arr[row][1] &&
      this.Arr[row][1] === this.Arr[row][2] &&
      this.Arr[row][1] === num
      ? true
      : false;
  };

  checkColumns = (col, num) => {
    let result = false;
    switch (col) {
      case 0:
        if (
          this.Arr[col][col] === this.Arr[1][col] &&
          this.Arr[col][col] === this.Arr[2][col] &&
          this.Arr[col][col] === num
        ) {
          result = true;
        }
        break;

      case 1:
        if (
          this.Arr[col][col] === this.Arr[0][col] &&
          this.Arr[col][col] === this.Arr[2][col] &&
          this.Arr[col][col] === num
        ) {
          result = true;
        }
        break;
      case 2:
        if (
          this.Arr[col][col] === this.Arr[0][col] &&
          this.Arr[col][col] === this.Arr[1][col] &&
          this.Arr[col][col] === num
        ) {
          result = true;
        }
        break;

      default:
        break;
    }
    return result;
  };

  rightDiagonal = (num) => {
    return this.Arr[0][0] === this.Arr[1][1] &&
      this.Arr[1][1] === this.Arr[2][2] &&
      this.Arr[0][0] === num
      ? true
      : false;
  };

  leftDiagonal = (num) => {
    return this.Arr[0][2] === this.Arr[1][1] &&
      this.Arr[1][1] === this.Arr[2][0] &&
      this.Arr[1][1] === num
      ? true
      : false;
  };

  checkDraw = () => {
    let resulat = true;
    for (let i = 0; i < this.Arr.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.Arr[i][j] === 0) {
          resulat = false;
        }
      }
    }
    return resulat;
  };
  clear = () => {
    localStorage.clear();
    this.setState({ countv: 0, X: 0, O: 0, draw: 0 });
    this.playAgain();
  };
  playAgain = () => {
    let temp = [...this.state.arrTd];
    for (let index = 0; index < temp.length; index++) {
      temp[index].innerText = "";
    }
    this.setState({ line: "", count: 0 });
    this.Arr = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  };
  render() {
    return (
      <div>
        <h1>Tic Tac Toe Game</h1>

        <div className={style.info}>
          <h2 className={style.player1}>
            Player 1 {<br />} {this.state.turn ? <section>X</section> : ""}{" "}
          </h2>
          <h2>
            Player 2 {<br />} {!this.state.turn ? <section>O</section> : ""}
          </h2>
        </div>

        <div className={this.state.win ? style.win : ""}>dasd</div>

        <div className={style.parent}>
          <div className={style[this.state.line]}></div>

          <table className={style.tableGame}>
            <tbody>
              <tr>
                <td
                  onClick={(e) => {
                    this.draw(e, 0);
                  }}
                  className={style.tdEdit}
                ></td>
                <td
                  onClick={(e) => {
                    this.draw(e, 1);
                  }}
                  className={style.tdEdit}
                ></td>
                <td
                  onClick={(e) => {
                    this.draw(e, 2);
                  }}
                  className={style.tdEdit}
                ></td>
              </tr>
              <tr>
                <td
                  onClick={(e) => {
                    this.draw(e, 3);
                  }}
                  className={style.tdEdit}
                ></td>
                <td
                  onClick={(e) => {
                    this.draw(e, 4);
                  }}
                  className={style.tdEdit}
                ></td>
                <td
                  onClick={(e) => {
                    this.draw(e, 5);
                  }}
                  className={style.tdEdit}
                ></td>
              </tr>
              <tr>
                <td
                  onClick={(e) => {
                    this.draw(e, 6);
                  }}
                  className={style.tdEdit}
                ></td>
                <td
                  onClick={(e) => {
                    this.draw(e, 7);
                  }}
                  className={style.tdEdit}
                ></td>
                <td
                  onClick={(e) => {
                    this.draw(e, 8);
                  }}
                  className={style.tdEdit}
                ></td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ marginRight: "1%", backgroundColor: "tan" }}
            onClick={this.playAgain}
          >
            Play Again
          </button>
          <button style={{ backgroundColor: "wheat" }} onClick={this.clear}>
            Clear Result
          </button>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span>X Wins : {this.state.X}</span>
          <span>draw : {this.state.draw}</span>
          <span>O Wins : {this.state.O}</span>
        </div>
      </div>
    );
  }
}
