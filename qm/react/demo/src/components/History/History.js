import React , {Component} from 'react'
import './history.css'

class History extends Component {
  getHistory(item,index){
    return (
      <li key={index}>
        <button>#{item.stepCount}:棋手{item.player}:下到位置{item.pos}</button>
      </li>
    )
  }
  render(){
    const {history} = this.props;
    if(history.length === 0){
      return(
        <div className="history">我是历史纪录</div>
      )
    }else{
      return (
        <div className="history">
          <ul>
            {history.map((item,index) =>
              this.getHistory(item,index)
            )}
          </ul>
        </div>
      )
    }
  }
}

export default History;