import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';
// const heading = <h1 className="site-heading">Hello,React</h1>;
// const Table = () =>{
//     return(
//         <tabel>
//             <tr>
//                 <td>1</td>
//                 <td>2</td>
//                 <td>3</td>
//             </tr>
//         </tabel>
//     );
// }

class App extends Component{
    // jsx 最终还是要编译成js 的 class
    render(){
        return(
            <div className="App container">
            <h1>Hello,React!</h1>
            <Table />
        </div>
        );
        
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))