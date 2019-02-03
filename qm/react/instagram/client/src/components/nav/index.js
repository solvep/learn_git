import React from 'react';
import { Menu,Dropdown,notification } from 'antd';
import {Link} from 'react-router-dom';
import Style from './index.scss';
console.log(Style);

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggle: true,
      focusStatus: false,
      search: ''
  }
}
focusSearchInput () {
  this.setState({'focusStatus': !this.state.focusStatus})
}
handelChange (event){
  this.setState({search: event.target.value})
}
  render(){
    const aboutMenu = (
      <Menu>
        <Menu.Item> 关于我 </Menu.Item>
        <Menu.Item> 推出 </Menu.Item>
      </Menu>
    )
    return (
      <nav className={Style['page-header']}>
        <div className={`${Style['header']} ${Style['toggle']}`}>
        <div className={Style['logo-space']}>
        {
            this.state.toggle?
            <Link  className={Style['instagram']} to={'/'} />
            :
            <Link  className={Style['icon']} to={'/'} />
        }
        </div>
        <div className={Style["search"]}>
          {
              this.state.focusStatus?
              <div className={Style["search-content"]}>
                  <input 
                      className={Style["search-input"]}
                      type="text" 
                      onKeyPress={this.searchContent}
                      placeholder="搜索" 
                      onChange={this.handelChange.bind(this)} 
                      autoFocus={this.state.focusStatus}  
                      onBlur={this.focusSearchInput.bind(this)} />
                  <span className={Style["icon"]}></span>
                  {/* <span className="close active"></span> */}
              </div>
              : 
              <div className={Style["search-block"]} onClick={this.focusSearchInput.bind(this)}>
                  <span className={Style["block-icon"]}></span>
                  <span className={Style["block-text"]}>搜索</span>
              </div>
          }
          </div>
          <div className={Style["navigate"]}>
          <Link className={Style["explore"]} to={'/'}></Link>
          <Link className={Style["love"]} to={'/'}></Link>
          <Dropdown overlay={aboutMenu}>
            {/* <a className={Style["user"]}></a> */}
          <Link className={Style["user"]} to={'/about'}/>
          </Dropdown>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav