var hour=7;
var minute=30;
var period="AM";
if(minute<30)
{
  if(minute==15&&"AM")
  {
    console.log("It's",hour,"and a quarter, in the morning.")
  }
  else if(minute==15&&"PM")
  {
    console.log("It's",hour,"and a quarter, in the evening.")

  }
  else if(period=="AM")
  {
    console.log("It's just after",hour,"in the morning.")
  }
  else if(period=="PM")
  {
    console.log("It's just after",hour,"in the evening.")
  }
}
if(minute==30)
{
  if(period=="AM")
  {
    console.log("It's",hour,"and a half in the morning.")
  }
  else if(period=="PM")
  {
    console.log("It's",hour,"and a half in the evening.")
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
