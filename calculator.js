function calculateSalary() 
 
	{//Get the values from the input fields
	var wage = document.getElementById('wage').value;
	var hours = document.getElementById('hours').value;

	//Check if the input values are valid numbers
	if (isNaN(wage) || isNaN(hours) || wage==="" || hours==="")

	{document.getElementById('result').innerHTML = "Please enter valid numbers for both fields.";
	return;}

	//Parse the values to floating point numbers
    	var wageNum = parseFloat(wage);
    	var hoursNum = parseFloat(hours);

	// Calculate the weekly salary
	var weeklySalary = wageNum * hoursNum;

	//Update the result with the calculated salary
	document.getElementById('result').innerHTML = "The salary is $" + weeklySalary.toFixed(2);}

