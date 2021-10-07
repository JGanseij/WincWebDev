const age= 17 
const isFemale = true
const driverStatus = "bob"
const firstName = "Bram"
const totalAmount = 55

if(age > 18) 
{

    console.log("You can drink")

}

else {
    console.log ("Drink a cola at home boii")
}

if(isFemale)

{
    console.log("Come in chiquita")
}

else{

    console.log("Go away pervert")

}

if(driverStatus === "drunk")
{
   console.log( "Here are you car keys")
}

else{
  console.log(  "You Sir, are drunk so call an Uber")
};


if(age >18 && age <25){
    console.log("Discount for you boii")
}

else{
    console.log("Pay up you sugardaddy")
};

if(firstName === "Bram" || firstName === "Sarah") {
console.log("You wil drink for free!")
}

else{
    console.log("No free beers for you bitch!")
};

if(totalAmount >25 && totalAmount <50){
    console.log("Free bitterballs")
}

else if(totalAmount >= 50 && totalAmount <100){
    console.log("Free nacho's")
}

else if(totalAmount >= 100){
    console.log("Free champnage for you!")

}

else{
    console.log("You are a cheap bastard!")
};
