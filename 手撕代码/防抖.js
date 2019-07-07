function debounce(fn,wait,immediate){ //防抖
    
    let timeout = null;
    return function(){
      clearTimeout(timeout)
      timeout =  setTimeout(()=>{
        fn.call(this,...arguments)
      },wait)
    }
  }