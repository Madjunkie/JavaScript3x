
/**
 * I - Init /  -  initialization 

C - Condition

U - Updation - You can use whichever you want pre or post, (we are using the the variable in the next) , // i++,++i


 */

/**
 * FOR LOOP
 */

for(let i=0 ; i<=10; i++){
console.log("Hello said "+i);
}

//===========================================================

// pre-incrimet will not change i value

for(let i=0 ; i<=10; ++i){

console.log("Hello said "+i);
}


// we can use any variable

// when we want to include the vaue we should use '='

for(let madhu=0 ; madhu<10; madhu++){

if(madhu > 8){
console.log('his birthday is in Auguist.');
}else if(madhu <8){
console.log('his birthday is not in Auguist.');
}
}


 //-------------------------------------------------------------------------------------------
/**
 * WHILE LOOP
 */

 let attempt = 0; // Init - 1

    while(attempt < 3){ // Condition - 2
    console.log('Attempt: '+attempt);
    attempt++; // UPDATION - 3

}

//------------------------------------------------------------------------------------
/**
 * DO WHILE
 * 
 *  will always execute at least one time
 * 
 * 
 */

let retry = 0;

do{
    console.log('executing : '+retry);
    retry++
}while(retry < 5);