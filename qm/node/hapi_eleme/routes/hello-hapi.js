module.exports = [
  {
    method:'GET',
    path:'/',
    handler:(request,reply) =>{
      reply('happpi')
    },
    config:{
      tags:['api','tests'],
      description:'测试hello-hapi'
    }
  }
]