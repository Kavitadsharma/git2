function identifyPrime(num) {
    let count=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count=0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}