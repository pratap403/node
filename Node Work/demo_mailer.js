var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
    user: 'araiput887@gmail.com',
    pass: ''
}
});

var mailOptions = {
    from: 'araiput887@gmail.com',
    to: 'akshaypratap403@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

    transporter.sendMail(mailOptions, function(error, info) {
        if(error)
            {console.log(error);}
        else{
            console.log('Email Sent: ' + info.response)
        }
    });