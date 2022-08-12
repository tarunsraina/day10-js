
let stocks = {
    Fruits : ["Banana","grapes","strawberry","apple"],
    liquids : ["ice","water"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolates","peanuts"]

};




let order = (fruitIndex,call_production) => {
    setTimeout(()=>{
    console.log(`${stocks.Fruits[fruitIndex]} has been selected`);
    //console.log("Order is placed..calling production");
    call_production();
    },2000);
}

let production = () => {
    //console.log("Order received , strting production");
setTimeout(()=>{
    console.log("production has started");
    
    setTimeout(()=>{
    console.log("Fruit has been chopped");

        setTimeout(()=>{
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);
            setTimeout(()=>{
            console.log("Macchine is started")
            },1000);
                setTimeout(()=>{
                    console.log(`Icecream placed on ${stocks.holder[0]}`);
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} is selected as toppings`);

                        setTimeout(()=>{
                            console.log("Ice cream is served :)")
                        },2000);
                    },2000);
                },2000);          
        },1000);
    },2000);
},0000);
};

order(0,production);