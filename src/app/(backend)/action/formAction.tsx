// "use server"
// import { z } from "zod"
// import nodemailer from "nodemailer"

// const formSchema = z.object({
//     name: z.string().min(3).max(15),
//     email: z.string().email().nonempty(),
//     phone: z.string().min(9).max(15)
// });

// export default async function EmailAction(name: string, email: string, phone: string) {
//     try {


//         const validatedField = formSchema.safeParse({ name, email, phone })

//         if (validatedField.error) {
//             return { info: validatedField.error.flatten().fieldErrors }
//         } else if (validatedField.success) {
//             const transporter = nodemailer.createTransport({
//                 host: process.env.HOST as string,
//                 port: process.env.PORTS as unknown as number,
//                 secure: false, // true for 465, false for other ports
//                 auth: {
//                     user: process.env.USER, // your SMTP username
//                     pass: process.env.PASSWORD // your SMTP password
//                 }
//             });

//             let mailOptions = {
//                 from: `Eduresearcher® Alert - <${process.env.MAILFROM}>`,
//                 to: validatedField.data.email,
//                 subject: `New DLF Form Entry | ${process.env.NEXT_PUBLIC_NAME}`,
//                 html: `
// <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #333; color: white;">
// <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #222222; padding: 20px;">

//    <div style="text-align: center;">
//     <p style="font-size: x-large; color: whitesmoke; font-weight: 700;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; ">Eduresearcher</p>
//    </div>
//   <div style="text-align: center; padding-bottom: 10px;">
//     <img src="https://muhammadumer.sirv.com/banner-temp.png" width="300" height="300" alt="Feature Image" style="max-width: 100%; height: auto;" />
//   </div>



//   <p style="font-size: 22px; color: white; line-height: 1.5; text-align: center;">We Have Recieved Your Order
//      ${validatedField.data.name} ! <br></p>
//   <div style="padding: 10px 0; text-align: center;">
// <div style="margin: 10px 0;">
// <p style="font-size: x-large; color: whitesmoke; text-align: center; font-weight: 500;">Use this Discount Code To Get Started  </p>
// <a href="https://eduresearchers.com/Order?coupon=FLAT45OFF">
//   <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/promo-code.png"  alt="">
// </a>
// </div>
// </div>


//   <div style="padding: 10px 0; text-align: center;">
//     <h2 style="font-size: 18px; color: white;">Discover Daily Lessons</h2>
//     <div style="margin: 10px 0;">
//       <img src="https://muhammadumer.sirv.com/daily-lessons.png" alt="Lessons Icon" style="width: 100px; height: 100px;" />
//     </div>
//     <p style="font-size: 15px; color: white; line-height: 1.5;">Learn from new Experts through daily bite-sized lessons in the Discover Feed.</p>
//   </div>


//   <div style="text-align: center;">
//     <p style="font-size: x-large; color: whitesmoke; font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
//     <a href="https://wa.me/+447451271188" style="display: inline-block; padding: 15px 30px; background-color: #2ea710; color: whitesmoke; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0; text-align: center;">
//       Whatsapp Now
//     </a>
//   </div>

//   <div style="text-align: center; padding-top: 10px; font-size: 12px; color: white;">
//     <p>Eduresearcher is a registered trademark of Eduresearcher, Inc. All rights reserved.</p>
//   </div>
// </div>
// </body>
// `
//             };

//             try {
//                 const info = await transporter.sendMail(mailOptions);
//                 console.log('Message sent: %s', info.messageId);
//                 console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//                 return { success: 'Form Submitted Successfully' };
//             } catch (error) {
//                 console.error('Error sending email:', error);
//                 return { error: 'Failed to send email' };
//             }
//         }

//     } catch (error) {
//         return { error: "Something Went Wrong" }
//     }

// }





"use server"
import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
    name: z.string().min(3).max(15),
    email: z.string().email().nonempty(),
    phone: z.string().min(9).max(15)
});

// Function to send email to the admin
async function sendAdminNotification(name: string, email: string, phone: string) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST as string,
            port: process.env.PORTS as unknown as number,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.USER, // SMTP username
                pass: process.env.PASSWORD // SMTP password
            }
        });

        const adminMailOptions = {
            from: `Eduresearcher® Alert - <${process.env.MAILFROM}>`,
            to: process.env.MAILTO, // Admin email address
            subject: `New Form Submission | ${process.env.NEXT_PUBLIC_NAME}`,
            html: `
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                <div style="max-width: 600px; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333;">New Form Submission</h2> <br>
                    <hr>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <hr>
                </div>
            </body>`
        };

        await transporter.sendMail(adminMailOptions);
        console.log('Admin notification sent successfully.');
    } catch (error) {
        console.error('Error sending admin notification:', error);
    }
}

export default async function EmailAction(name: string, email: string, phone: string) {
    try {
        const validatedField = formSchema.safeParse({ name, email, phone });

        if (validatedField.error) {
            return { info: validatedField.error.flatten().fieldErrors };
        } else if (validatedField.success) {
            const transporter = nodemailer.createTransport({
                host: process.env.HOST as string,
                port: process.env.PORTS as unknown as number,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD
                }
            });

            const mailOptions = {
                from: `Eduresearcher® Alert - <${process.env.MAILFROM}>`,
                to: validatedField.data.email,
                subject: `New DLF Form Entry | ${process.env.NEXT_PUBLIC_NAME}`,
                html: `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #333; color: white;">
<div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #222222; padding: 20px;">
   <div style="text-align: center;">
    <p style="font-size: x-large; color: whitesmoke; font-weight: 700;">Eduresearcher</p>
   </div>
  <div style="text-align: center; padding-bottom: 10px;">
    <img src="https://muhammadumer.sirv.com/banner-temp.png" width="300" height="300" alt="Feature Image" style="max-width: 100%; height: auto;" />
  </div>
  <p style="font-size: 22px; color: white; line-height: 1.5; text-align: center;">We Have Received Your Order ${validatedField.data.name} !</p>
  <div style="padding: 10px 0; text-align: center;">
    <p style="font-size: x-large; color: whitesmoke; font-weight: 500;">Use this Discount Code To Get Started</p>
    <a href="https://eduresearchers.com/Order?coupon=FLAT45OFF">
      <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/promo-code.png"  alt="">
    </a>
  </div>
  <div style="padding: 10px 0; text-align: center;">
    <h2 style="font-size: 18px; color: white;">Discover Daily Lessons</h2>
    <div style="margin: 10px 0;">
      <img src="https://muhammadumer.sirv.com/daily-lessons.png" alt="Lessons Icon" style="width: 100px; height: 100px;" />
    </div>
    <p style="font-size: 15px; color: white; line-height: 1.5;">Learn from new Experts through daily bite-sized lessons in the Discover Feed.</p>
  </div>
  <div style="text-align: center;">
    <p style="font-size: x-large; color: whitesmoke; font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
    <a href="https://wa.me/+447451271188" style="display: inline-block; padding: 15px 30px; background-color: #2ea710; color: whitesmoke; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0;">
      Whatsapp Now
    </a>
  </div>
  <div style="text-align: center; padding-top: 10px; font-size: 12px; color: white;">
    <p>Eduresearcher is a registered trademark of Eduresearcher, Inc. All rights reserved.</p>
  </div>
</div>
</body>`
            };

            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Send admin notification
                await sendAdminNotification(name, email, phone);

                return { success: 'Form Submitted Successfully' };
            } catch (error) {
                console.error('Error sending email:', error);
                return { error: 'Failed to send email' };
            }
        }
    } catch (error) {
        return { error: "Something Went Wrong" };
    }
}
