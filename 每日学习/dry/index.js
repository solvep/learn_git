var a = 10;
var obj = {
    a: 20
}

function fn () {
    this = obj;
    console.log(this.a);
}

fn();