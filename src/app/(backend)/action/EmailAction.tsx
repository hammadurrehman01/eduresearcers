"use server";
import * as fsPromises from "fs/promises";
import path from "path";
import generateOrderId from "./generateOrderId";
import saveFormDataToJson from "./saveDataToJson";
import { transporter } from "./Transporter";
import { File } from "buffer";



export const EmailAction = async (formData: FormData) => {

  // **************Extracting variables separately*******************//

  const orderId = generateOrderId();
  const topic = formData.get("topic") as string;
  const selectedValue = formData.get("selectedValue");
  const wordCount = formData.get("wordCount") as string;
  const level = formData.get("level") as string;
  const paper = formData.get("paper") as string;
  const quality = formData.get("quality") as string;
  const deadline = formData.get("deadline") as string;
  const subject = formData.get("subject") as string;
  const language = formData.get("language") as string;
  const source = formData.get("source") as string;
  const format = formData.get("format") as string;
  const referencing = formData.get("referencing") as string;
  const pricePerPage = formData.get("pricePerPage") as string;
  const totalPrice = formData.get("totalPrice") as string;
  const file = formData.getAll("file") as any;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const email = formData.get("email") as string;
  const notes = formData.get("notes") as string;
  const symbol = formData.get("symbol") as string;
  const ppp = formData.get("ppp") as string;
  const unit = formData.get("unit") as string;


file?.map((i: { name: any; })=>{
  console.log(i.name);
})


  const data: any = {
    orderId,
    name,
    phone,
    country,
    email,
    notes,
    topic,
    selectedValue,
    wordCount,
    level,
    paper,
    quality,
    deadline,
    subject,
    source,
    format,
    referencing,
    pricePerPage,
    totalPrice,
    file,
    language,
    symbol,
    ppp,
    unit,
  }

  // ************** Redirect user to stripe*******************

  const paymentLinkStripe = generateStripeLink(unit,orderId, totalPrice)

  try {
    saveFormDataToJson(data);
    if(file){
      await handleFileUpload(file)
    }
    data['paymentLinkStripe'] = paymentLinkStripe;
    await sendEmailClient(data)
    await sendEmailSupport(data)
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }

  return { success: paymentLinkStripe };
};




async function handleFileUpload(files: File[]) {
  try {
    const uploadDir = path.join(process.cwd(), 'Attachments');

    // Create the directory if it doesn't exist
    await fsPromises.mkdir(uploadDir, { recursive: true });

    console.log('Files to upload:', files); // Log the files

    // Map over files and create promises for each file upload
    const filePromises = files.map(async (file) => {
      // Log the file object directly to inspect its structure
      console.log('Inspecting file object:', file);
      
      if (!file.name) {
        console.error('File object does not have a name:', JSON.stringify(file));
        return; // Skip this file
      }
    
      const filePath = path.join(uploadDir, file.name);
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        await fsPromises.writeFile(filePath, buffer);
        console.log(`File saved: ${file.name}`);
      } catch (err) {
        console.error(`Error saving file ${file.name}:`, err);
      }
    });
      
  
    // Wait for all file uploads to complete
    await Promise.all(filePromises);
    console.log('All files uploaded successfully.');
  } catch (error) {
    console.error('Error handling file upload:', error);
  }
}

async function sendEmailClient(data: any) {
  const {
    orderId,
    name,
    phone,
    country,
    email,
    notes,
    topic,
    selectedValue,
    wordCount,
    level,
    paper,
    quality,
    deadline,
    subject,
    source,
    format,
    referencing,
    pricePerPage,
    totalPrice,
    paymentLinkStripe,
    language,
    symbol,
    ppp,
    unit,
    file
  } = data
  const clientMailOptions = {
    from: `Eduresearcher® Alert - Order Recieved <${process.env.MAILFROM}>`,
    to: email,
    subject: `We Have Recieved Your Order - Complete Your Payment Now | ${process.env.NEXT_PUBLIC_NAME}`,
    html: `
 <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0; ">
    <div style="background-position: center;background-size: cover; width: 100%; font-family: system-ui; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #fffdfa; padding: 20px;">
    
        <div style="text-align: center;">
            <div style="display: inline-block; ">
                <img src="https://muhammadumer.sirv.com/edu-logo-light.png" alt="" style="display: inline-block; margin-right: 5px; vertical-align: middle; height: 80px; width: auto;">
     
                 </div>  
        </div>
    
      <p style="font-size: 22px;  line-height: 1; text-align: center; font-weight: 600;">
        Thank You For Your Order ${name} <br></p>

      <p style="font-size: 17px; text-align: center; font-weight: 600;padding-left: 20px;padding-right: 20px; color: grey;">
        Your order is being processed. Our team of experts will reach out to you soon.</p>

        
        <div style="text-align: center;">
          <a href="${paymentLinkStripe}" style="display: inline-block; padding: 12px; background-color: #ff8615; color: whitesmoke;  text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 25px; margin: 2px 0; text-align: center; vertical-align: middle;">
            Pay Now
          </a>
        </div>

        <p style="font-size: 17px; text-align: center; font-weight: 600;padding-left: 20px;padding-right: 20px; color: grey;">
        Please click the "Pay Now" button to finalize your payment. This will enable us to begin processing your order right away and keep you informed of its progress.</p>
    
      <div style="text-align: start;">
        <h2 style="font-size: 26px; font-weight: 600; ">Personal Details</h2>
      </div>

      <div style="width:100%; height: 3px; background-color: #ffd17e; margin-bottom: 20px;"></div>

         <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">OrderId:</div>
          <div style="float: right;">${orderId}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Name:</div>
          <div style="float: right;">${name}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Email:</div>
          <div style="text-decoration: none; float: right;">${email}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Phone:</div>
          <div style="float: right;">${phone}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Country:</div>
          <div style="float: right;">${country}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Notes:</div>
          <div style="float: right;">${notes}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
 
      <div style="text-align: start;">
        <h2 style="font-size: 26px; font-weight: 600;">Order Summary</h2>
      </div>

      <div style="width:100%; height: 3px; background-color: #ffd17e; margin-bottom: 20px;"></div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Topic:</div>
          <div style="float: right;">${topic}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">No Of Pages:</div>
          <div style="float: right;">${selectedValue}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Word Count:</div>
          <div style="float: right;">${wordCount}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Academic Level:</div>
          <div style="float: right;">${level}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Paper Type:</div>
          <div style="float: right;">${paper}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Paper Quality:</div>
          <div style="float: right;">${quality}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Deadline:</div>
          <div style="float: right;">${deadline}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Subject:</div>
          <div style="float: right;">${subject}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Language:</div>
          <div style="float: right;">${language}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">No Of Sources:</div>
          <div style="float: right;">${source}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Paper Format:</div>
          <div style="float: right;">${format}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Referencing:</div>
          <div style="float: right;">${referencing}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

        <div style="text-align: start;">
        <h2 style="font-size: 26px; font-weight: 600; ">Order Pricing</h2>
      </div>
      
    <div style="width:100%; height: 3px; background-color: #ffd17e; margin-bottom: 20px;"></div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Discount:</div>
          <div style="float: right;">FLAT45OFF</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Turnitin Report:</div>
          <div style="float: right; background-color: orange; border: 2px solid #FFA500; border-radius: 15px; width: 100px; padding: 2px; color:white ;  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">Free</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 400; ">
          <div style="float: left;">Price Per Page:</div>
          <div style="float: right;">${symbol}${pricePerPage}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Total Price:</div>
          <div style="float: right;">${symbol}${totalPrice}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    

      <div style="text-align: center;">
        <p style="font-size: 18px;  font-weight: 400;">You Can Contact Our Support Team 24/7.</p>
        <a href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?" style="display: inline-block; padding: 10px 20px; background-color: #3dad32;  text-decoration: none; font-size: 16px; vertical-align: middle; font-weight: bold; border-radius: 5px; margin: 5px 0; text-align: center; color: whitesmoke;">
          <img style="vertical-align: middle;" width="30px" src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png" alt="">
          Whatsapp Now
        </a>
      </div>
    
      <div style="text-align: center; padding-top: 10px; font-size: 12px; ">
        <p>Eduresearcher is a registered trademark of Eduresearcher, Inc. All rights reserved.</p>
      </div>
    
    </div>
    </body>
    `,
  };
  try {
    const info2 = await transporter.sendMail(clientMailOptions);
    console.log("client Email sent:", info2.messageId);
  } catch (error) {
    console.error("Error sending email:", error);

  }
}

async function sendEmailSupport(data: any) {
  const {
    orderId,
    name,
    phone,
    country,
    email,
    notes,
    topic,
    selectedValue,
    wordCount,
    level,
    paper,
    quality,
    deadline,
    subject,
    source,
    format,
    referencing,
    pricePerPage,
    totalPrice,
    language,
    file,
    symbol,
    ppp,
    unit,
  } = data
  
  // const attachments = await Promise.all(
  //   file.map(async (file: { path: string; name: string }) => {
  //     const filePath = file.path; // Path to the file on the server
  //     const fileName = file.name; // Use file.name for the original name
  
  //     // Read the file as a buffer
  //     const content = await fsPromises.readFile(filePath);
  
  //     return {
  //       filename: fileName,
  //       content,
  //     };
  //   })
  // );
  const supportMailOptions = {
    from: `New Order Form | ${process.env.NEXT_PUBLIC_NAME} <${process.env.MAILFROM}>`,
    to: process.env.MAILTO, // send to support email
    subject: `New Order Form | ${process.env.NEXT_PUBLIC_NAME}`,
    html: `
      <body>
        <h2>New Order Summary</h2>
        <p><strong>OrderID:</strong> ${orderId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <h3>Order Details</h3>
        <ul>
          <li><strong>Topic:</strong> ${topic}</li>
          <li><strong>Pages:</strong> ${selectedValue}</li>
          <li><strong>Word Count:</strong> ${wordCount}</li>
          <li><strong>Academic Level:</strong> ${level}</li>
          <li><strong>Paper Quality:</strong> ${quality}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Language:</strong> ${language}</li>
          <li><strong>Paper Format:</strong> ${format}</li>
          <li><strong>Paper Type:</strong> ${paper}</li>
          <li><strong>No Of Sources:</strong> ${source}</li>
          <li><strong>Referencing:</strong> ${referencing}</li>
          <li><strong>Deadline:</strong> ${deadline}</li>
          <li><strong>Price Per Page:</strong> ${pricePerPage}</li>
          <li><strong>Total Price:</strong> ${symbol}${totalPrice}</li>
          <li><strong>Notes:</strong> ${notes}</li>
        </ul>
      </body>
    `,
    attachments: file,
  };

  try {
    const info = await transporter.sendMail(supportMailOptions);
    console.log("support Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

function generateStripeLink(unit: string, orderId: string, totalPrice: string) {
  const finalPaymentUnit = Buffer.from(unit).toString("base64");
  const finalTotalAmount = Buffer.from(totalPrice).toString("base64");
  const finalProductName = Buffer.from("Digital Service").toString("base64");
  const orderToken = Buffer.from(orderId).toString("base64");

  const finalUrl = Buffer.from(
    // `http://localhost:3000/api` // for dev environment
    `https://eduresearchers.com/api` // for prod environment
  ).toString("base64");

  // const paymentLinkStripe = `https://eduresearchers.com/test-payment/secure-pay-external-2.php?cevpr_havg=${finalPaymentUnit}&cevpr_nzbhag=${finalTotalAmount}&cebqhpg_anzr=${finalProductName}&gbxra_rkgreany=${orderToken}&url=${finalUrl}`;
  const paymentLinkStripe = `https://mastermindsenterprises.com/stripe-version-2/secure-pay-external-2.php?cevpr_havg=${finalPaymentUnit}&cevpr_nzbhag=${finalTotalAmount}&cebqhpg_anzr=${finalProductName}&gbxra_rkgreany=${orderToken}&url=${finalUrl}`;
  return paymentLinkStripe
}