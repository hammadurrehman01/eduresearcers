"use server";
import nodemailer from "nodemailer";

export async function sendPopupEmails(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone");

    // Transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: process.env.PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // your SMTP username
        pass: process.env.PASSWORD, // your SMTP password
      },
    });

    // Email options for the client
    const clientMailOptions: any = {
      from: `Edu Researcher® Alert - Discount Recieved <${process.env.MAILFROM}>`,
      to: email,
      subject: "You're in! Here's Your Exclusive Discount 🎉",
      html: `   <body style="margin: 0; padding: 0;   color: black;">
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
</body>`,
    };

    // Send the client email
    await transporter.sendMail(clientMailOptions);

    // Email options for the support team
    const supportMailOptions = {
      from: `Edu Researcher® Alert - Discount Recieved <${process.env.MAILFROM}>`,
      to: `${process.env.MAILTO}`,
      subject: "New Popup Form Submission",
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <p><b>New Submission Details:</b></p>
                <ul>
                    <li><b>Name:</b> ${name}</li>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Phone Number:</b> ${phone}</li>
                </ul>
                <p>Please take the necessary actions.</p>
            </div>
            `,
    };

    // Send the support email
    await transporter.sendMail(supportMailOptions);

    return {
      success: "Confirmation and notification emails sent successfully.",
      discount: "Discount received successully!",
    };
  } catch (error: any) {
    console.error("Error sending emails:", error.message);
    return { error: error.message };
  }
}
