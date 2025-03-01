"use server";
import { z } from "zod";
import nodemailer from "nodemailer";

export default async function EmailAction2(
  email: any,
  currentURL: any,
  locationDetails: any
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: process.env.PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // your SMTP username
        pass: process.env.PASSWORD, // your SMTP password
      },
    });

    const mailOptions = {
      from: `Edu Researchers Alert - <${process.env.MAILFROM}>`,
      to: email,
      subject: ` Your Special Discount Awaits – FLAT 45% OFF! | ${process.env.NEXT_PUBLIC_NAME}`,
      html: `
    <body style="margin: 0; padding: 0;   color: black;">
        <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #f4eefd;  font-family: Google Sans;">
        
           <div style="text-align: center; padding: 10px; background-color:rgba(0, 0, 0, 0.836); border-radius: 10px;">
            <div style="display: inline-block; ">
           <img src="https://muhammadumer.sirv.com/edu-logo-darkmode.png" alt="" style="display: inline-block; margin-right: 5px; vertical-align: middle; height: 70px; width: auto;">
    
            </div>  
        </div>
    
              
          <div style="padding: 10px 0; text-align: center;">
            <div style="margin: 10px 0;">
                <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/dlf-form.png"  alt="">
            </div>
            </div>
        
          <p style="font-size: 20px;text-align: center; font-weight: 600;">Exciting News! We’ve Got Something Special Just For You.<br></p>
       
          <div style=" text-align: center;">
            <div style="margin: 5px 0;">
              <p style="font-size: medium;  text-align: center; color: gray; font-weight: 600; padding-left: 50px; padding-right: 50px;">
               Don’t Miss This Limited-time Offer—Take The Next Step Towards Your Success Today.  </p>
            </div>
            </div>
    
    
        
    
          <div style="padding: 10px 0; text-align: center;">
            <div style="margin: 10px 0;">
            <p style="font-size: 20px;  text-align: center; font-weight: 500;">Get FLAT 45% OFF on your order <br /> with this exclusive promo code</p>
            <a href="https://eduresearchers.com/Order?coupon=FLAT45OFF">
              <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/promo-img-edu.png"  alt="">
            </a>
            </div>
            </div>
    
        
          <div style="text-align: center;">
            <p style="font-size: 18px;  font-weight: 400;">Need Help? Our Support Team Is Available 24/7!</p>
            <a href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?" style="display: inline-block; padding: 10px 20px; background-color: #3dad32;  text-decoration: none; font-size: 16px; vertical-align: middle; font-weight: bold; border-radius: 5px; margin: 5px 0; text-align: center; color: whitesmoke;">
              <img style="vertical-align: middle;" width="30px" src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png" alt="">
              Whatsapp Now
            </a>
          </div>
        
        
        </div>
        </body>
    `,
    };

    const supportMailOptions = {
      from: `Email Discount Form | ${process.env.NEXT_PUBLIC_NAME} <${process.env.MAILFROM}>`,
      to: process.env.MAILTO, // send to support email
      subject: `Email Discount Form | ${process.env.NEXT_PUBLIC_NAME}`,
      html: `
        <body>
        <hr />
          <h2>User Email</h2>
          <ul>
           <li><strong>Email:</strong> ${email}</li>
          </ul>
          
          <hr />
  
           <p><strong>CurrentURL:</strong> ${currentURL}</p>
          <p><strong>Location Details:</strong></p>
          <pre>${JSON.stringify(locationDetails, null, 2)}</pre>
          <hr />
  
        </body>
      `,
    };

    try {
      const info = await transporter.sendMail(supportMailOptions);
     const clientInfo = await transporter.sendMail(mailOptions);
      console.log("support Email sent:", info.messageId);
      console.log("Client Email sent:", clientInfo.messageId);
      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
    }
  } catch (error) {
    return { error: "Something Went Wrong" };
  }
}
