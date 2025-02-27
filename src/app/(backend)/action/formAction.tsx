"use server";
import { z } from "zod";
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().nonempty(),
  phone: z.string().min(9).max(15),
});

// Function to send email to the admin
async function sendAdminNotification(
  name: string,
  email: string,
  phone: string,
  currentUrl: string,
  locationDetails: any
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: process.env.PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // SMTP username
        pass: process.env.PASSWORD, // SMTP password
      },
    });

    const adminMailOptions = {
      from: `Eduresearcher® Alert - <${process.env.MAILFROM}>`,
      to: process.env.MAILTO, // Admin email address
      subject: `New DLF Form Submission | ${process.env.NEXT_PUBLIC_NAME}`,
      html: `
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                <div style="max-width: 600px; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333;">New DLF Form Submission</h2> <br>
                    <hr>
                    <p><strong>User Name:</strong> ${name}</p>
                    <p><strong>User Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>CurrentURL:</strong> ${currentUrl}</p>
                    <hr>
                       <p><strong>Location Details:</strong></p>
                       <pre>${JSON.stringify(locationDetails, null, 2)}</pre>
                </div>
            </body>`,
    };

    await transporter.sendMail(adminMailOptions);
    console.log("Admin notification sent successfully.");
  } catch (error) {
    console.error("Error sending admin notification:", error);
  }
}

export default async function EmailAction(
  name: string,
  email: string,
  phone: string,
  currentUrl: string,
  locationDetails: any
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: process.env.PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `Eduresearcher® Alert - <${process.env.MAILFROM}>`,
      to: email,
      subject: `New DLF Form Entry | ${process.env.NEXT_PUBLIC_NAME}`,
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
          
            <p style="font-size: 20px;   text-align: center; font-weight: 600;">Thanks! We’re already working on it!<br></p>
         
            <div style=" text-align: center;">
              <div style="margin: 5px 0;">
                <p style="font-size: medium;  text-align: center; color: gray; font-weight: 600; padding-left: 50px; padding-right: 50px;">
                  When Edu Researcher gives you a deal,
                  Jump on the chance—make it real!
                  Grab your spot and give it a whirl,
                  Order now and watch your dreams swirl!  </p>
              </div>
              </div>
      
            <div style="padding: 10px 0; text-align: center;">
              <div style="margin: 10px 0;">
              <p style="font-size: 20px;  text-align: center; font-weight: 500;">Apply this discount code to begin your journey!</p>
              <a href="https://eduresearchers.com/Order?coupon=FLAT45OFF">
                <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/promo-img-edu.png"  alt="">
              </a>
              </div>
              </div>
      
            <div style="text-align: center;">
              <p style="font-size: 18px;  font-weight: 400;">You Can Contact Our Support Team 24/7.</p>
              <a href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?" style="display: inline-block; padding: 10px 20px; background-color: #3dad32;  text-decoration: none; font-size: 16px; vertical-align: middle; font-weight: bold; border-radius: 5px; margin: 5px 0; text-align: center; color: whitesmoke;">
                <img style="vertical-align: middle;" width="30px" src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png" alt="">
                Whatsapp Now
              </a>
            </div>
          
            <div style="text-align: center; padding: 10px; font-size: 12px; ">
              <p>Edu Researcher is a registered trademark of Edu Researcher, Inc. All rights reserved.</p>
            </div>
          </div>
          </body>`
    };
      

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Send admin notification
      await sendAdminNotification(
        name,
        email,
        phone,
        currentUrl,
        locationDetails
      );

      return { success: "Form Submitted Successfully" };
    } catch (error) {
      console.error("Error sending email:", error);
      return { error: "Failed to send email" };
    }
  } catch (error) {
    return { error: "Something Went Wrong" };
  }
}
