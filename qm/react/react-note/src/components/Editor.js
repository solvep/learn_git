import React,{Component } from 'react'

// state ? props < 子组件时 内部自身状态时用state 
class Editor extends Component{
  state = {
    entity:this.props.entity,
    body:this.props.entity.body,
    updateEntity:this.props.updateEntity
  }
  render(){
    return(
      <div className="ui form">
        <div className="field">
          <textarea defaultValue={this.state.body} onInput={(event) =>{
            this.state.updateEntity(event)
          }} rows="5" placeholder="写点东西..."></textarea>
        </div>
      </div>
    )
  }
}

export default Editor