

let askHolder = ()=> {

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Which holder do you need?")
            resolve(console.log("Customer gave input of holder"));
        },4000);
        

    })
}

async function makeIceCream(){

    console.log("Took order");
    console.log("Banana has been chopped");
    console.log("Water/Ice has been added");
    console.log("Forgot to ask the holder....cup or cone?");
    console.log("Getting out of kitchen to ask the customer");
    await askHolder();
    console.log("Customer input is taken");
    console.log("Placed in holder and added toppings");
    console.log("Ice cream is delivered!");
}


makeIceCream()

console.log("Other works continued here");
console.log("Cleaning dishes");
console.log("Cleaning tables and recieving new orders");