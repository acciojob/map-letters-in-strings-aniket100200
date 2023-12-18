function letterMad(str)
{
	if(!str)return [];
	
    let ans={};
    for(let i=0;i<str.length;i++){
        ans[str.charAt(i)]=[];
    }
   

    //we have created the map..

    for(let i=0;i<str.length;i++)
    {
        ans[str.charAt(i)].push(i);
    }

    return ans;
}


let str=prompt("Enter Your String");
alert(letterMad(str).toString());