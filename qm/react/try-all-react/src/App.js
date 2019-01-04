import React,{Component} from 'react';
import Table from './Table'
import Form from './Form'
class App extends Component{
  state = {
    characters : [
      {
        'name':'唐唐',
        'job':'FE'
      },
      {
        'name':'唐马儒',
        'job':'鉴黄师'
      },
      {
        'name':'唐僧',
        'job':'国师'
      },
    ]
  }
  componentDidMount(){
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url)
    .then(result =>result.json())
    .then(result =>{
      this.setState({
        data:result
      })
    })
  }
  render(){
    // 准备数据的地方
    const {characters} = this.state
    // const a = 1
    return(
      <div className="Container">
      <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      <Form handleSumbit={this.handleSumbit}></Form>
      </div>

    )
  }
  handleSumbit = character =>{
    this.setState({
      characters:[...this.state.characters,character]
    })
  }
  removeCharacter = index =>{
    const {characters} = this.state;
    this.setState({
      characters:characters.filter((character,i)=>{
        return i !== index;
      })
    })
  }
}

export default App