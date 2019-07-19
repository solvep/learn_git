class Store{
    constructor(){
        let store = localStorage.getItem('cache')
        if(!store){
            store = {
                maxSize:1024*1024,
                size:0
            }
            this.store = store
        } else {
            this.store = JSON.parse(store)
        }
    }
    set(key,value,expire){
        this.store[key] = {
            date:Date.now(),
            expire,
            value
        }
        let size = this.sizeOf(JSON.stringify(this.store[key]))
        if(this.store.maxSize < size + this.store.size){
            console.log('超过.....')
            var keys = Object.keys(this.store)
            keys = keys.sort((a,b) =>{
                let item1 = this.store[a],
                item2 = this.store[b]
                return item2.date - item1.date
            })
            
        }
    }
}

var instance = null;
class Storage {
  static getInstance() {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  }
  setItem = (key, value) => localStorage.setItem(key, value)
  getItem = key => localStorage.getItem(key)
}