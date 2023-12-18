function letterMad(str)
{
    let ans={};
    
    for(let i=0;i<str.length;i++){
        if(ans[str.charAt(i)]){
            ans[str.charAt(i)].push(i);
        }

        else{
            ans[str.charAt(i)]=[i];
        }
    }

    console.log(ans);

    return ans;
}


let str=prompt("Enter Your String");
alert(letterMad(str));