import React,{Component} from 'react'
import './modal.css';

class Modal extends Component{
  state ={
    visible:false
  }
  constructor(props){
    super(props)
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      visible:nextProps.visible
    })
  }
  componentDidMount(){
    this.setState({
      visible:this.props.visible
    })
  }
  
  maskClick = ()=>{
    this.setState({
      visible:false
    })
  }
  cancel =()=>{
    const {onClose} = this.props;
    onClose && onClose();
    this.setState({
      visible:false
    })
  }
  confirm =()=>{
    const {confirm} = this.props;
    confirm && confirm();
    this.setState({
      visible:false
    })
  }
  render(){
    const {visible} = this.state;
    const {title,children} = this.props;
    return visible &&(
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-operator">
            <button className="modal-operator-close" onClick={this.cancel}>取消</button>
            <button className="modal-operator-confirm" onClick={this.confirm}>确认</button>
          </div>
        </div>
        <div className="mask" onClick={this.maskClick}></div>
      </div>
    )
  }
}

export default Modal;

class Student extends React.Component{
  static sayHello(){
   console.log('Hello from Student');
    
  }
  constructor(){
    super(props)
  }
  inputElement = React.createRef();
  render(){
    return(
      <div>
        <p>姓名：{this.state.name}</p>
        <p>年龄:<inpute value={this.state.age} onChange={(e) =>{
          this.setState({
            age:e.target.value
          })
        }} 
        ref={this.inputElement}
        />
      </p>
      <p>
        <input type="button"
          value="focus input"
          onClick={this.focus}
          />
      </p>
    </div>
  )
}
focus (e){

}
}
ReactDOM.render(<Student name="小明" age={18}/>,document.getElementById('root'))