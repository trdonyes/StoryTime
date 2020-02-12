var questions = 13;
var userContinent = "hi";
var userYear= "hi";
var userLand= "hi";
var userSociety1= "hi";
var userSociety2= "hi";
var userRegion1= "hi";
var userConcord= "hi";
var userMountain= "hi";
var userOrcs= "hi";
var userGiants= "hi";
var userCity= "hi";
var userPerson= "hi";
var userDragon= "hi";

var questions = 13;
var questionsLeft = " [" + questions + " questions left]";
userContinent = prompt("Enter the name of your continent");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userYear =prompt("Enter the year your campaign is starting");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userLand =prompt("Enter a descriptive word for the terrain");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userSociety1 =prompt("Enter the name of one of the two major ruling parties");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userSociety2 =prompt("Enter the name of the second major ruling party");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userRegion1 =prompt("Enter the name of for the collection of city-states");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userConcord =prompt("Enter the name of the concord for the city-states");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userMountain =prompt("Enter the name of a major mountain range in this world");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userOrcs =prompt("Enter the name of a major Orc tribe");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userGiants =prompt("Enter the name of a Giant tribe");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userCity =prompt("Enter the name of your starting city");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userPerson =prompt("Enter the name of a famous person within the city");
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
userDragon =prompt("Enter the name of a dragon");

alert("All done. Ready for your introduction?");
var sentence = "<h2>" + "Welcome to " + userContinent + ". The year is " + userYear + " P.D, Post Divergence. The continent is divided both" + "\n"  
+ "by the "+userLand+" terrain as well as the cultural differences between the "+userSociety1+" and the "+userSociety2 + "\n"
+ ". To the East lies the "+userRegion1+", a collection of city-states united under the "+userConcord+" Concord, who exploit" + "\n"
+ "their advantagous location to push their agenda for peace among the known world by raising the tariffs of anything" + "\n"
+ "coming through the lands that is usable for violent conflict as well as limiting the amount of weaponry that each" + "\n"
+ "kingdom is capable of obtaining through trade alone. Beyond the "+userMountain+" lies the evergrowing tribal conflicts" + "\n"
+ "between the "+userOrcs+" and the "+userGiants+" Giants. Our story however begins in at The Scared Brute, an adventurers" + "\n"
+ "tavern in the city of "+userCity+", amidst the drinking company of none other than "+userPerson+", the slayer of the" + "\n"
+ "Chromatic Dragon known as "+userDragon+"." + "</h2>";
document.write(sentence);