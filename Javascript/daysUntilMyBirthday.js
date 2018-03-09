//using a FOR loog
function birthday(){
    for(var daysUntilMyBirthday=60;daysUntilMyBirthday>=0;daysUntilMyBirthday--)
{
    if(daysUntilMyBirthday>30)
    {
        console.log(daysUntilMyBirthday,"days until my birthday. So sad.") //C
    }
    else if(daysUntilMyBirthday>5)
    {
        console.log(daysUntilMyBirthday,"days until my birthday.")
    }
    else if(daysUntilMyBirthday>1)
    {
        console.log(daysUntilMyBirthday,"DAYS UNTIL MY BIRTHDAY.")
    }
    else if(daysUntilMyBirthday==1)
    {
        console.log(daysUntilMyBirthday,"DAY UNTIL MY BIRTHDAY.")
    }
    else
    {
        console.log("IT'S MY BIRTHDAY")
    }
}
}


//using a WHILE loop
function birthday(){
var daysUntilMyBirthday=60 //A
while(daysUntilMyBirthday>=0) //B
{
    if(daysUntilMyBirthday>30)
    {
        console.log(daysUntilMyBirthday,"days until my birthday. So sad.") //C
    }
    else if(daysUntilMyBirthday>5)
    {
        console.log(daysUntilMyBirthday,"days until my birthday.")
    }
    else if(daysUntilMyBirthday>1)
    {
        console.log(daysUntilMyBirthday,"DAYS UNTIL MY BIRTHDAY.")
    }
    else if(daysUntilMyBirthday==1)
    {
        console.log(daysUntilMyBirthday,"DAY UNTIL MY BIRTHDAY.")
    }
    else
    {
        console.log("IT'S MY BIRTHDAY")
    }
    daysUntilMyBirthday-- //D
}
}
