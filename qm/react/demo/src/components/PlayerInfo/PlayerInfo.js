import React , {Component} from 'react'
import './PlayInfo.css'

class PlayerInfo extends Component {
  render(){
    const {curPlayer} = this.props
    return (
      <div className="playinfo">
        下一步棋手：{curPlayer}
      </div>
    )
  }
}

export default PlayerInfo;