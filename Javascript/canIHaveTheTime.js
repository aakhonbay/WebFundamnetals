var hour=7;
var minute=50;
var period="AM";
if(minute<30)
{
  if(period=="AM")
  {
    console.log("It's just after",hour,"in the morning.")
  }
  else if(period=="PM")
  {
    console.log("It's just after",hour,"in the evening.")
  }
}
else if(minute>30)
{
  if(period=="AM")
  {
    hour+=1;
    console.log("It's almost",hour,"in the morning.")
  }
  else if(period=="PM")
  {
    hour+=1;
    console.log("It's almost",hour,"in the evening.")
  }
}
