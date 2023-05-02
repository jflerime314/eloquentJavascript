function isDivisibleBy3(numb){
    let state = (numb % 3 == 0);
    return state;
}

function isDivisibleBy5(numb){
    let state = (numb % 5 == 0)
    return state;
}

function isDivisibleBy3and5(numb){
    let state = (numb % 3 == 0 && numb % 5 == 0);
    // console.log(state);
    return state;
}

function print(limit){
    for(var i=0; i<limit; i++){
        if(isDivisibleBy3and5(i)){
            console.log("FizzBuzz")
        }else if(isDivisibleBy5(i)){
            console.log("Buzz")
        }else if(isDivisibleBy3(i)){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}

print(101)