const cron=require('node-cron');
const express=require('express');
const nodeMailer=require('nodemailer');
const app=express();
const PORT=process.env.PORT|| 9856;


cron.schedule('* * * * *', function () {
    console.log('Running Cron Job');

    let transporter=nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port:'587',
        secure: false,
        auth: {
            user: 'golda.wuckert@ethereal.email',
            pass: 'WeTbdpxxHgVRwBHdAE'
        }
    });

    const mailOptions={
        from: '“Ganesh suthar” <webdeveloper.ganesh@gmail.com>', // sender address
        to: 'webdeveloper.ganesh@gmail.com', // list of receivers
        subject: 'Hello there!', // Subject line
        text: 'A Message from Node Cron App', // plain text body
        html: '<b>A Message from Node Cron App</b>' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        console.log(info.messageId);
        if (err) {
        console.log(err);
        }
    });
});


app.listen(PORT,()=>console.log(`The Server is running on PORT ${PORT}...`));