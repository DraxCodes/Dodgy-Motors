	var check = 0;
	function Check() {
		reset();
		check = 0;
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var address = document.getElementById("address").value;
		var postcode = document.getElementById("postcode").value;
		var homephone = document.getElementById("homephone").value;
		var mobile = document.getElementById("mobile").value;
		var type_get = document.getElementById("type");
		var type = type_get.options[type_get.selectedIndex].text;
		
		if (name == "" || name.length < 4) {
			alert("Problem With Your Name");
			document.getElementById("form_name").innerHTML = "Error!!! - Name: ";
			check =1;
		}
				
		if (email == "" || email.length < 6) {
			alert("Problem With Your Email");
			document.getElementById("form_email").innerHTML = "Error!!! - Email Address: ";
			check =1;
		}
		
		if (address == "" || address.length < 6) {
			alert("Problem With Your Address");
			document.getElementById("form_address").innerHTML = "Error!!! - Home Address: ";
			check =1;
		}
		
		if (postcode == "" || postcode.length < 5) {
			alert("Problem With Your Postcode");
			document.getElementById("form_postcode").innerHTML = "Error!!! - Post Code: ";
			check =1;
		}
		
		if (homephone.length < 11 || isNaN(homephone)) {
			alert("Home Phone is Incorrect");
			document.getElementById("form_home").innerHTML = "Error!!! - Home Phone: ";
			check =1;
		}
		if (mobile.length < 11 || isNaN(mobile)) {
			alert("Mobile Number Is Incorrect");
			document.getElementById("form_mobile").innerHTML = "Error!!! - Mobile Num: ";
			check =1;
		}
		if (type == "Pick One from below") {
			alert("You need to pick the car you're interested in!");
			document.getElementById("car").innerHTML = "Error!!! - Car Interested In: ";
			check =1;
		}
		if (check == 0) {
			confirm();
		}
}

	function reload() {
	location.reload();
}

	function reset() {
	document.getElementById("form_name").innerHTML = "Name: ";
	document.getElementById("form_email").innerHTML = "Email Address: ";
	document.getElementById("form_address").innerHTML = "Home Address: ";
	document.getElementById("form_postcode").innerHTML = "Post Code: ";
	document.getElementById("form_home").innerHTML = "Home Phone: ";
	document.getElementById("form_mobile").innerHTML = "Mobile Num: ";
	document.getElementById("car").innerHTML = "Car Interested In: ";
	check = 1;
}

	function confirm() {
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var address = document.getElementById("address").value;
		var postcode = document.getElementById("postcode").value;
		var homephone = document.getElementById("homephone").value;
		var mobile = document.getElementById("mobile").value;
		var type_get = document.getElementById("type");
		var type = type_get.options[type_get.selectedIndex].text;
		var div1 = document.getElementById("form");
		var div2 = document.getElementById("main_section_header1");
		var price = "0"
		
		switch (type) {
			case "Deal - Nissan Gt-R 3.8 V6 Black Edition 2dr":
				price = "40,000";
				break;
			case "Deal - Porsche 997 GT3 RS 4 Litre Clubsport":
				price = "299,995";
				break;
			case "Deal - Ford Focus 2.0T ST3 5dr Revo Stage 4":
				price = "18,999";
				break;
			case "Nissan Qashqai TEKNA IS DCI S/S 5-Door":
				price = "16,495";
				break;
			case "BMW X1 2.0 sDrive18d SE 5dr":
				price = "16,495";
				break;
			case "BMW X5 3.0 xDrive40d M Sport 4x4 5dr":
				price = "39,995";
				break;
			case "Ford Focus 1.6 i 16v Ghia 5dr":
				price = "789";
				break;
			case "Ford Fiesta 2.0 ST 3dr":
				price = "2,995";
				break;
			case "Subaru Impreza 1.5 R 5dr":
				price = "16,495";
				break;
		}
		
		div2.innerHTML = "<h1>Contact Us</h1>"
		div1.innerHTML = "<h2>Thank-you for choosing dodgy motors as your dealer.</h2><br><h3>We would like you to check that the information below is correct:</h3><p><br>Name: <strong>" + name + "</strong><br>Email Address: <strong>" + email + "</strong><br>Address: <strong>" + address + "</strong><br>Postcode: <strong>" + postcode + "</strong><br>Home Telephone: <strong>" + homephone + "</strong><br>Mobile Number: <strong>" + mobile + "</strong><br>Car Interested in: <strong>" + type + "</strong></p><p>The price of the selected car is:<strong> £" +price + "</strong></p><p>Is this correct and would you like to continue with purchase?<br>" + "<input type=\"submit\" value=\"Yes\" id=\"submit\" size=\"40\" onclick=\"yes()\">" + "<input type=\"submit\" value=\"No\" id=\"submit\" size=\"40\" onclick=\"reload()\">";
		
}

	function yes() {
		var div1 = document.getElementById("form");
		div1.innerHTML = "<h2>Congratulations an email has been sent to the address you provided. Thankyou for choosing Dodgey Motors as your car dealer.</h2> <br><input type=\"submit\" value=\"Continue\" id=\"submit\" size=\"40\" onclick=\"reload()\">";
}





























