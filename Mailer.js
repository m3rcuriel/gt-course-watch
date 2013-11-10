var nodemailer = require('nodemailer');

function Mailer(email, pass){

// create reusable transport method (opens pool of SMTP connections)
	this.emailID = email;
	this.emailPass = pass;
	
	this.smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: email,
	        pass: pass
	    }
	});

}

Mailer.prototype.sendMail = function sendMail(existingRequest){

	// setup e-mail data with unicode symbols
	var mailOptions = {
//	    from: "GT Course Watch Mailer ✔ <tofubeast1111@gmail.com>", // sender address
	    from: "GT Course Watch Mailer ✔ <"+ this.emailID +">", // sender address
	    to: existingRequest.email, // list of receivers: "bar@blurdybloop.com, baz@blurdybloop.com"
	    subject: "Seat Open for Class: " + existingRequest.crn, // Subject line
	    text: "Rapido!", // plaintext body
	    // html: "<b>Hello world ✔</b>" // html body
	}

	// send mail with defined transport object
	this.smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }
	    // else{
	    //     console.log("Message sent: " + response.message);
	    // }

	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});

}

module.exports = Mailer;