setTimeout(()=>{
    let count = 100;
    let once = 100;
    let number = count / once;
    let time = 0; // 已经触发的次数
    const ul = document.getElementsByTagName("ul")[0];

    function add (){
      const fragment = document.createDocumentFragment();
      for(let i = 0;i < once; i++){
        const li = document.createElement("li");
        li.innerText = Math.floor(Math.random() * 10000);
        fragment.appendChild(li);
      }
      ul.appendChild(fragment)
      loop()
      time++;
      console.log(time)
    }
    function loop(){
      if(number>time){ 
        window.requestAnimationFrame(add)
      }
    }
    loop()
  },0)
