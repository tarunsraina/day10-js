



function one(call_two){
    console.log("function 1");
    call_two();
}

function two(){
    console.log("function 2");
}

one(two)
