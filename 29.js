var charmanderLevel = Math.ceil(Math.random() * 100);
if (charmanderLevel < 16){
    console.log("Charmander");
} else if (charmanderLevel < 36){
    console.log("Charmeleon");
} else if(charmanderLevel < 101){
    console.log("Charizard");
} else {
    console.log("Charizard is as good as it gets");
}