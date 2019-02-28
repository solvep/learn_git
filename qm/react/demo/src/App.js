import React , {Component} from 'react'
import Board from './components/Board/Board'
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import History from './components/History/History';
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      stepCount:0,
      history:[],
    }
    this.handleClickSquare = this.handleClickSquare.bind(this);
  }
  getCurPlayer(){   //获取棋手状态
    const {stepCount} = this.state;
    return stepCount % 2 ===0 ? "x":"o";
  }
  calcSquares(history,stepCount){
    // const {history,stepCount} = this.state;
    const squaresNew = new Array(9).fill(null);
    for(let i=0;i<stepCount;i++){
      let curHistory = history[i];
      squaresNew[curHistory.pos] = curHistory.player;
    }
    return squaresNew;
  }
  handleClickSquare(pos,info){
    console.log(pos,info);
    if(info == null){
      const {history} = this.state;
      console.log(history)
      const historyNew = [
        ...history,
        {
          stepCount:this.state.stepCount,
          player:this.getCurPlayer(),
          pos:pos,
        }
      ];
      this.setState((preState)=>({
        history:historyNew,
        stepCount:preState.stepCount+1,
        squares:this.calcSquares(historyNew,preState.stepCount+1)
      }))
    }
  }
  render(){
    const curPlayer =  this.getCurPlayer();
    const {history,squares} = this.state;
    return (
      <div className="main">
        <div className="leftPanel">
          <Board squares={squares} onClickSquare={this.handleClickSquare}></Board>
        </div>
        <div className="rightPanel">
          <PlayerInfo curPlayer={curPlayer}></PlayerInfo>
          <History history={history}></History>
        </div>
      </div>
    )
  }
}

export default App;