//compoounding until day 30
var reward = .01
for(var day=2;day<31;day++)
{
    reward = reward * 2
    console.log("On day", day, "the reward was", reward)
}

//compounding until just past 10000
function 10K()
{
    var day = 2;
        for(var reward=.01;reward<=10000;)
    {
        reward = reward * 2
        console.log("On day", day, "the reward was", reward)
        day++
        if (reward==Infinity)
        {
            break;
        }
    }
}


//compounding until just past 1000000000
var day = 2;
for(var reward=.01;reward<=1000000000;)
{
    reward = reward * 2
    console.log("On day", day, "the reward was", reward)
    day++
    if (reward==Infinity)
    {
        break;
    }
}

//compounding until just past Infinity
var reward=.01;
for(var day=1;;day++)
{
    reward = reward * 2
    console.log("On day", day, "the reward was", reward)
    if (reward==Infinity)
    {
        break;
    }
}
