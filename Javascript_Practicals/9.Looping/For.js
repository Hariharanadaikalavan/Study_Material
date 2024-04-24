var end=10;

for(let st=1;st<=end;st++)
 {
    if(st%2==0)
    {
        console.log( "Even:"+""+st);
    }
 }
 for(let st=1;st<=end;st++)
 {
    if(st%2!=0)
    {
        console.log("odd:"+""+st);
    }
 }
 for(let st=1;end>=st;end--)
 {
    if(end%2==0)
    {
        console.log( "Even reversed:"+" "+end);
    }
 }
 for(let st=1;end>=st;end--)
 {
    if(end%2!=0)
    {
        console.log(" reversed odd:"+""+end);
    }
 }

 