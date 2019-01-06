import {MemberEntity} from '../../model';
import {members} from './mockData';

const baseURL = 'https://api.github.com/orgs/lemoncode'
// 生命周期中，thenable 函数的类型是什么
const fecthMembers = ():Promise<MemberEntity[]>=>{
  return Promise.resolve(members)
}

const fecthMembersAsync = ():Promise<MemberEntity[]> =>{
  const membersURL = `${baseURL}/members`;
  return fetch(membersURL)
    .then(response =>response.json())
    .then(mapToMembers);
}
// 数据是any类型的 转化成MemberEntity的类型
const mapToMembers = (githubMembers:any[]):MemberEntity[] =>{
  return githubMembers.map(mapToMember);
}

const mapToMember = (githupMember):MemberEntity =>{
  return {
    id:githupMember.id,
    login:githupMember.login,
    avatar_url:githupMember.avatar_url,
  }
}
const saveMember = (member:MemberEntity):Promise<boolean> =>{
  // insertMember(member);
  return Promise.resolve(true)
}
// const insertMember = (member:MemberEntity) =>{
//   member.id = members.length
//   members=[
//     ...members,
//     member,
//   ]
// }
export const memberAPI = {
  fecthMembers,
  fecthMembersAsync,
  saveMember
}