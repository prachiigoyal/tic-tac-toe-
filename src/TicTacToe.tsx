import * as React from "react"
import * as ReactDOM from "react-dom"
import Game from "./Game"

const TicTacToe: React.FunctionComponent<{}> = () => {
  return <Game/>
}

ReactDOM.render(
  <TicTacToe/>,
  document.getElementById("root"),
)
