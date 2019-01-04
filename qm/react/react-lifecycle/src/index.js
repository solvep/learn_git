import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React.createElement

class LifeCycle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      str:'Hello',
      name:'没有账号'
    };
    setTimeout(() =>{
      this.setState({
        str:'你好'
      });
      console.log("2")
    },1000)
    // this.init();
  }
  componentWillMount(){
    console.log('component Will Mount')
  }
  componentDidMount(){
    //适合来发送请求
    //  UI ready 还是个壳子就是大概结构有了，接着取数据，不会阻塞界面
    console.log('组件已经挂载了')
    fetch('https://api.github.com/users/shunwuyu')
      .then(data => data.json())
      .then(data =>{
        this.setState({
          name:data.name,
        });
        console.log("1")
      })
  }
  componentWillUpdate(){
    console.log('我将要更新')
  }
  componentDidUpdate(){
    console.log('我更新了')
  }
  componentWillReceiveProps(){
    console.log('我进行了props的更新')
  }

  shouldComponentUpdate (nextProps,nextState){
    if(nextProps.num === this.props.num){
      console.log('值没有改变不用更新')
      return false
    }
    return true
  }
  componentWillUnmount(){
    console.log('我被移除了')
  }
  render(){
    return(
      <div>
        <div>{this.state.name}</div>
        <span>
          <h2>{parseInt(this.props.num)}</h2>
          <span>
            <h2>{this.state.str}</h2>
          </span>
        </span>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    setTimeout(()=>{
      this.setState({
        num:3
      });
      console.log("3")
    },3000)
    setTimeout(() =>{
this.setState({
  showLifeCycle:false
    })
    },10000)
  }
  state = {
    num:2,
    showLifeCycle:true
  }
  render(){
    if(!this.state.showLifeCycle)
      return <div>hahahah</div>
    return(
      <LifeCycle num={this.state.num}></LifeCycle>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
