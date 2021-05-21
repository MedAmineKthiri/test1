//day1
function square(monkey) {
  return monkey * monkey;
}
102
15929

//day2
function oldEnoughToDrive(age) {
	if (age>=16) {
		return "true";
	};
	{return "false"}
}
	function SameLength(string1,string2) {

		if (string1.length==string2.length) {
			return "true"};
			 {
				return "false"
			}
		}

		function rentalCar(Name,Age) {
if (Age>=21)
 {
  return 'Have fun driving'
 }
	return 'You cannot have the key';
}

	
function RentalCar2(Name, Age) {
	if (Name!=='Joe'&& Age>=21) {
		return 'have fun driving'

	} else if (Name!=='Joe'&& Age<21){
		return ' you cant have the keys'
	} else {
		return' you are banned';

	}
}
;
function scoreToGrade(score){
	if (score>=90&& score<=100){
return'your grade is A' 
	} 
	else if (score <90 &&score>=80){
		return 'Your grade is B'
	}
	else if (score <80 &&score>=70){
		return 'Your grade is c'
	}
	else if (score <70 &&score>=0){
		return 'Your grade is D'
	}
	else{ return 'INVALID SCORE'}


};

function whatToDoOutside (temperature, weather) {
	if (temperature>=24&&'weather'=='sunny'){
		return' The is iseal for water sport'
	}
	else if (temperature <24 && temperature >=14&& 'weather'=='sunny'){
		return'The weather is ideal for team sport'
	};

}