import React,{Component} from 'react';

class Form extends Component{
    constructor(){
        super();
        // 子组件，它是有自己独立的数据state
        this.initialState = {
            name:'',
            job:''
        };
        this.state = this.initialState;
    }
    render(){
        // console.log(this.state)
        const {name,job} = this.state;
        return(
            <form className="form-group">
                <div className="form-field">
                    <label >Name</label>
                    <input type="text" 
                    className="form-control" 
                    name="name"
                    value={name} onChange={this.handleChange}/>
                </div>
                <div className="form-field">
                    <label >Job</label>
                    <input type="text" 
                    className="form-control" 
                    name="job"
                    value={job} onChange={this.handleChange}/>
                </div>
                <div className="form-field">
                <input type="button"
                    value="Submit"
                    className="btn btn-primary"
                    onClick={this.submitForm}/>
                </div>
            </form>
        );
    }
    submitForm = () =>{
        this.props.handleSumbit(this.state);
        this.setState(this.initialState)
    }
    handleChange = event =>{
        // console.log(event)
        const {name,value} = event.target;
        // console.log(name);
        this.setState({
           [name]:value
        })
    }
}
export default Form