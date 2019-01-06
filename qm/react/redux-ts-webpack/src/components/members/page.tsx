import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberRow } from './memberRow';
import { MemberHeader } from './memberHeader';
import {Link} from 'react-router-dom';

interface State {
  members: MemberEntity[]
}
interface Props {
}
export class MembersPage extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      members: []
    }
  }
  public componentDidMount () {
    memberAPI.fecthMembersAsync()
      .then(members => {
        this.setState({
          members
        })
      })
  }

  public render () {
    // console.log(this.state.members);
    return (
      <div className="row">
        <h2>Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
          {
            this.state.members.map((member) => (
              <MemberRow 
                key={member.id}
                member={member}/>
            ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}