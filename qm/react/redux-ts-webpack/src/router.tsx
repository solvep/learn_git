import * as React from 'react';
import {Route, HashRouter,Switch} from 'react-router-dom'
import {App} from './app';
import {About,MembersPage,MemberPage,MemberPageContainer} from './components';

export const AppRouter:React.StatelessComponent<{}> =() =>{
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App}></Route>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/members" component={MembersPage}></Route>
          <Route path="/member" component={MemberPageContainer}></Route>
        </Switch>
      </div>
    </HashRouter>
  )
}