const fs = require('fs');   //Comment js规范
try{
//     fs.readFile('./a.txt','utf8',function(err,data){
//         console.log(data);
//         fs.readFile('./b.txt','utf8',function(err,data){
//             console.log(data);})

//              fs.readFile('./c.txt','utf8',function(err,data){
//             console.log(data);
        
//     })
// })     sync 同步的 天生有一个阻塞的效果
    // const dataA = fs.readFileSync('./a.txt','utf8');
    // const dataB = fs.readFileSync('./b.txt','utf8');
    // const dataC = fs.readFileSync('./c.txt','utf8');
    const dataA = new Promise((resolve,reject) =>{
        fs.readFile('./a.txt','utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
        })
    dataA
    .then(data =>{
         console.log('文件a',data)
        return dataB;
    }).then(data =>{
        console.log('文件b',data);
        return dataC;
    }).then(data =>{
        console.log('文件c',data);
    })
    .catch(err =>{
        console.log(err)
    })
    const dataB = new Promise((resolve,reject) =>{
        fs.readFile('./b.txt','utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
        })
       
        const dataC = new Promise((resolve,reject) =>{
            fs.readFile('./c.txt','utf8',function(err,data){
                if(err){
                    reject(err);
                }else{
                    resolve(data)
                }
            })
            })
           
}
    catch(e){
        console.log('读取文章失败'+e.message)
    }
