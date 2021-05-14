	// CEPEDA, ALTHEA JANE 	2020-08554


	// Small description of the website 
	window.alert("This website is an INCOME TAX PAYABLE calculator for working Filipinos [created by: Althea Cepeda]");
	

	// Declaring asked variables [monthly income & number of dependents]
	var monthlyIncome = Number(document.getElementById("monthly-income").value);
	var dependentsNumber = Number(document.getElementById("num-dependents").value);


	// Calculating the gross income of the user
	function grossIncome(income)
	{
		var monthlyIncome = Number(document.getElementById("monthly-income").value);
		var income;

		if (monthlyIncome > 0)
		{
			income = ((monthlyIncome*12) + monthlyIncome);
		}
		else
		{
			window.alert("Invalid MONTHLY INCOME input. Please re-enter a valid amount.");	// error trapping
		}


		return income;
	}



	// Identifying if Government Worker or not to proceed with Total GSIS/SSS deduction
	function initialDeduction(deduc)
	{
		var deduc;
		var monthlyIncome = Number(document.getElementById("monthly-income").value);

		// If government worker: GSIS (9% monthly deduction)
		if (document.getElementById("yes").checked)
		{
			deduc = 12*(monthlyIncome*0.09);
		}

		// If non-government worker: SSS (11% monthly deduction)
		else if (document.getElementById("no").checked)
		{
			deduc = 12*(monthlyIncome*0.11);
		}

		else
		{
			window.alert("Please choose whether GOV or NON-GOV worker.");
		}

		return deduc;
	}


	// Calculating PhilHealth & PagIbig deduction
	function secondDeduction(deduc2)
	{
		var deduc2;
		var monthlyIncome = Number(document.getElementById("monthly-income").value);

		// Pagibig: 1.375% monthly deduction
		var pagibigDeduc = monthlyIncome*0.01375;
		// Philhealth: 3.5% monthly deduction
		var philhealthDeduc = monthlyIncome*0.035;
		
		// Total PH and PI deduction
		deduc2 = (12*philhealthDeduc) + (12*pagibigDeduc);

		return deduc2;
	}


	// Calculating Tax Exemption [personal tax exemption + additional personal tax exemption]
	function thirdDeduction(deduc3)
	{
		// personal exemption 
		const pe = 50000;
		var deduc3;
		var dependentsNumber = Number(document.getElementById("num-dependents").value);

		// if number of dependents is less than or equal to 4
		if (dependentsNumber <= 4)
		{
			deduc3 = (dependentsNumber*pe) + pe;
		}
		// if number of dependens is more than 5
		else if (dependentsNumber > 4)
		{
			deduc3 = (pe*4) + pe;
		}
		else
		{
			window.alert("Invalid NUMBER OF DEPENDENTS input. Please re-enter a valid number.");   // error trap
		}
		

		return deduc3;
	}


	// Calculating the Net Taxable Income
	function netTaxableIncome(taxableIncome)
	{
		var taxableIncome;
		var totalDeduction;
		gIncome = grossIncome();
		iDeduction = initialDeduction();
		sDeduction = secondDeduction();
		tDeduction = thirdDeduction();
		
		// Adding the total deductions
		totalDeduction = iDeduction + sDeduction + tDeduction;

		// Subtracting the total deduction from the gross income
		taxableIncome = gIncome - totalDeduction;

		return taxableIncome;
	}


	// Calculating the Payable Tax 
	function payabletax()
	{
		var taxPayable;
		net = netTaxableIncome();

		// NTI is Php 1 - Php 250000
		if (net >= 1 & net <= 250000)
		{
			taxPayable = net * 0.00;
		}
		// NTI is Php 250000 - 400000
		else if (net > 250000 & net <= 400000)
		{
			taxPayable = (net - 250000) * 0.20;
		}
		// NTI is Php 400000 - 800000
		else if (net > 400000 & net <= 800000)
		{
			taxPayable = ((net - 400000) * 0.25) + 30000;
		}
		// NTI is Php 800000 - 2000000
		else if (net > 800000 & net <= 2000000)
		{
			taxPayable = ((net - 800000) * 0.30) + 130000;
		}
		// NTI is Php 2000000 - 8000000
		else if (net > 2000000 & net <= 8000000)
		{
			taxPayable = ((net - 2000000) * 0.32) + 490000;
		}
		// NTI is Php 8000000 above
		else if (net > 8000000)
		{
			taxPayable = ((net - 8000000) * 0.35) + 2410000;
		}

	
		document.getElementById("finalResult").innerHTML = "PAYABLE TAX: ₱ " + String(taxPayable); 
		
		
	}
