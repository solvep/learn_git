import React, { Component } from 'react';
import { 
  Form, Icon, Input, Button 
} from 'antd';
import './App.css'

const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem 
          validateStatus={userNameError?'error':''}
          help={userNameError || ''}
        >
        {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error,values)=>{
      if(!error){
        console.log(values);
      }else{
        console.log(error);
      }
    });
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
// console.log(WrappedHorizontalLoginForm);

class App extends Component {
  render () {
    return (
      <div >
        <WrappedHorizontalLoginForm /> 
      </div>
    );
  }
}

export default App;
