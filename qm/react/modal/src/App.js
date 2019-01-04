import React, { Component } from 'react';
import Modal from './modal/modal'
import './App.css';

class App extends Component { 
  
  showModal = ()=>{
    this.setState({
      visible:true
    })
  }
  state= {
    visible:false
  }
  render() {
    const {visible} = this.state;
    return (
      <div className="App">
        <button onClick={this.showModal}>点击</button>
       <Modal 
        title="这是自定义标题"
        visible={visible}
        onClose={this.cancel}
        confirm={this.confirm}>这是自定义的content</Modal>
      </div>
    );
  }
  cancel =()=>{
    console.log('通知父组件，关闭了')
  }
  confirm = () =>{
    console.log('通知父组件，点了确定')
  }
}

export default App;
