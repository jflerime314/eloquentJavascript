function build(numb){
    let str = "#"
    if (numb == 0) return str;
    else{
        for(var i=0;i<numb;i++){
            str += "#";
        }
    }
    return str;
}

function print(limit){
    for(var j=0; j<limit; j++){
        console.log(build(j))
    }
}


print(5)
