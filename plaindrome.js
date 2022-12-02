let str = "namaman";
let ans = false;
let j = Math.floor(str.length/2); 
for(let i=0; i<=j; i++){
    if(str[i] != str[str.length-i-1]){
        ans = true;
    }else{
        break;
    }
}
console.log(ans)