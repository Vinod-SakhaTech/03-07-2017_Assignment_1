/**
 * 
 */
function validateFeilds() {

	/*if (n == "") {

		alert("Name Field Should Not Empty! ");
		document.getElementById('name').focus();
		return false;

	} else if (!isNaN(n)) { // Check Username doesnot conatain any digits!

		alert("Please enter only characters!");
		document.getElementById('name').select();
		return false;

	} else if ((n.length < 6) || (n.length > 20)) {
		alert("Name must be 6 to 20 characters only");
		document.getElementById('name').select();
		return false;

	}*/

	var n = /^[a-zA-Z ]{5,30}$/;
	var e = n.test(document.getElementById('name').value);

	if(e == false) {
		alert("Please Enter Valid Name");
		document.getElementById('Email').focus();
		return false;
	}

	var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{1,10}|\d+)$/i;
	var e = emailfilter.test(document.getElementById('email').value);
	if (e == false) {
		alert("Please Enter a valid Mail ID");
		document.getElementById('email').focus();
		return false;
	}

	var phone = /^\d{10}$/;
	var p = phone.test(document.getElementById('mobile').value);
	if (p == false) {

		alert("Enter Valid Mobile Number");

	}

	var passfil = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/;
	var pass = passfil.test(document.getElementById('password').value);
	if (pass == false) {
		alert("Please Enter a valid Password");
		document.getElementById('password').focus();
		return false;

	}

	var cpassfil = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/;
	var cpass = cpassfil.test(document.getElementById('confirm').value);
	if (cpass == false) {
		alert("Passwords Should Be Match");
		document.getElementById('confirm').focus();
		return false;

	}
	
	

}

function validate(){
	
	var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;

	
}