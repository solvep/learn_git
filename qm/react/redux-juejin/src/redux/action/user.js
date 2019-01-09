export const REGISTER_USER = 'REGISTER_USER';
export const registerActions = (newUser) =>{
  return {
    type:REGISTER_USER,
    data:newUser
  }
}