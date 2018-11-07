(function(){
    // 前端数据库，新的html5 兼容性window
    const indexedDB = window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||window.OIDBTransacation || window.msIDBTransacation||window.mozIDBTransacation,
    dbVersion = 1.0;

    let request = indexedDB.open("elephantFiles",dbVersion); 
    const createObjectStore = function(dataBase){
        dataBase.createObjectStore("elephants");
    };
    let db;
    const getImageFile = () =>{
        // 图片？ 不在库里，根目录，存到库里
        // 找到图片
        const xhr =new XMLHttpRequest(); //把图片请求过来
        let blob = null;
        xhr.open('GET','./elephant.png',true);
        xhr.responseType = 'blob';   //内容格式 text/json text text/html   blob二进制流的文件
        xhr.addEventListener('load',function(){
            if(xhr.status == 200){
                blob = xhr.response;
                console.log(blob);
                putElephantInDb(blob);
            }
        });
        xhr.send();
    }
    const putElephantInDb = function(blob){
        const readWriteMode = typeof 
        IDBTransaction.READ_WRITE == 'undefined'?'readwrite':IDBTransaction.READ_WRITE;
        // 事物
        const transaction = db.transaction(["elephants"],readWriteMode);
        transaction.objectStore("elephants").put(blob,"image");
        transaction
            .objectStore("elephants")
            .get("image")
            .onsuccess = function(event){
                const imgFile = event.target.result;
                // blob 文件,但是img要的是个src也就是url 本地，blob：//  将文件变成一个地址
                const URL = window.URL || window.weibkitURL;
               const imgURL = URL.createObjectURL(imgFile);
            //    console.log(imgURL);
               document.getElementById('elephant').src = imgURL;
               document.getElementById('elephant').onload = function(){
                   window.URL.revokeObjectURL(this.src);
               };
            }
    }
    request.onerror = function (event){
        console.log('error creating/accessing IndexedDB database');
    }
    request.onsuccess = function (){
        db = request.result
        db.onerror = function (event){
            console.log('error')
        }
        getImageFile();
    }
    request.onupgradeneeded = function(event){
        console.log(event.target.result);
        createObjectStore(event.target.result);
    }
})()