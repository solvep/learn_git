public  void test() {
    int distance=3;
    int page = 2;
    int limit = 10;
    int beforCount = (page - 1) * limit;
    List<Integer> positionList = new ArrayList<>();
    //如果是第一页
    if(beforCount == 0){
        int cardCount = limit / distance;
        for(int i = 0; i < cardCount; i++){
            positionList.add((distance+1)*(i+1)-1);
        }
    } else {//如果不是第一页
        int left = beforCount%distance;
        int cardCount = (left + limit)/distance;
        positionList.add(distance - left);
        for(int i = 1; i < cardCount; i++){
            positionList.add((i+1)*distance + i - left);
        }
    }
    System.out.println(positionList.toString());
}

function test(distance, page, limit){
    let distance=distance;
    let page = page;
    let limit = limit;
    let beforCount = (page - 1) * limit;
    let positionList = []

    if(beforCount == 0){
        let cardCount = limit / distance;
        for(let i = 0; i < cardCount; i++){
            positionList.push((distance+1)*(i+1)-1);
        }
    } else {//如果不是第一页
        let left = beforCount % distance;
        let cardCount = (left + limit)/distance;
        positionList.push(distance - left);
        for(let i = 1; i < cardCount; i++){
            positionList.push((i+1)* distance + i - left);
        }
    }
    console.log(positionList.toString())
}