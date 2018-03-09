function printRange(start,end,skip)
{
    if(!skip)
    {
        skip = 1;
    }
    if(!end)
    {
        end = start
        start = 0
    }
    for(start ; start<end ; start+=skip)
    {
        console.log(start)
        if(start>=50)
        {
            break;
        }
    }
    for(start ; start>end ; start-=skip)
    {
        console.log(start)
        if(start<=-50)
        {
                break;
        }
    }
}
printRange(2,10,2)
printRange(4,8)
printRange(8)
