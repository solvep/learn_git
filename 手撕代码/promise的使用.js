let promise = new Promise((resolve,reject) =>{
    reject('拒绝它')
})

promise.then((data) =>{
    console.log('success')
},(error) =>{
    console.log(error)
})

console.log([].every(()=>{
   
}))