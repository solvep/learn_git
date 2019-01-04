import Taro,{Component} from '@tarojs/taro';
import {View,Input,Text} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.css';
import {add,del} from '../../actions/index'

class Index extends Component {
  constructor(props){
    super(props);
    this.state ={
      newTodo:[]
    }
  };
  saveNewTodo(e){
    let {newTodo} = this.state;
    if(!e.detail.value || e.detail.value === newTodo)
      return;
      this.setState({
        newTodo:e.detail.value
      })
  };
  addTodo (){
    let {newTodo} = this.state;
    let { add1 } = this.props;
    if(!newTodo) return;
    add1(newTodo);
    this.setState({
      newTodo:''
    })
  }
  delTodo (id){
    let {del} = this.props;
    del(id);
  }
  render(){
    let { newTodo } = this.state;
    const {todos} = this.props;
    const todosJsx = todos.map(todo =>{
      return (
        <View className="todos_item">
          <Text>
            {todo.text}
          </Text>
          <View className="del" onClick={this.delTodo.bind(this,todo.id)}>-</View>
        </View>
      )
    });
    return(
      <View className="index todos">
        <View className="add_wrap">
        <Input className="todos_item" value={newTodo} onBlur={this.saveNewTodo.bind(this)}/>
        <View className="add" onClick={this.addTodo.bind(this)}>+</View>
        </View>
        <View>
          {todosJsx}
        </View>
      </View>
    )
  }
}
// connext 俩个参数 state action
export default connect(({todos}) =>({
  todos:todos.todos
}),(dispatch) =>({
  add1(data){
    console.log('aaa')
    dispatch(add(data))
  },
  del(id){
    console.log('bbbb')
    dispatch(del(id))
  }
}))(Index)