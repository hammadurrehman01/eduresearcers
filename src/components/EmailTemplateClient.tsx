import React from "react";

const EmailTemplateClient = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "20px",
        margin: "0 auto",
        backgroundColor: "#f4eefd",
        fontFamily: "Arial, sans-serif",
        color: "black",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.836)",
          borderRadius: "10px",
        }}
      >
        <img
          src="https://muhammadumer.sirv.com/edu-logo-darkmode.png"
          alt="Edu Researchers Logo"
          style={{
            display: "inline-block",
            height: "70px",
            width: "auto",
          }}
        />
      </div>

      {/* Banner Image */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          style={{ borderRadius: "10px" }}
          height="100"
          src="https://muhammadumer.sirv.com/dlf-form.png"
          alt="Limited-Time Offer"
        />
      </div>

      {/* Main Message */}
      <p style={{ fontSize: "20px", textAlign: "center", fontWeight: "600" }}>
        Exciting News! We’ve Got Something Special Just For You.
      </p>

      <p
        style={{
          fontSize: "16px",
          textAlign: "center",
          color: "gray",
          fontWeight: "600",
          padding: "0 50px",
        }}
      >
        Don’t Miss This Limited-time Offer—take The Next Step Towards Your
        Success Today.
      </p>

      {/* Promo Section */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <p style={{ fontSize: "20px", fontWeight: "500" }}>
          Get FLAT 45% OFF on your order <br /> with this exclusive promo code
        </p>
        <a href="https://eduresearchers.com/Order?coupon=FLAT45OFF">
          <img
            style={{ borderRadius: "10px" }}
            height="100"
            src="https://muhammadumer.sirv.com/promo-img-edu.png"
            alt="Promo Code Image"
          />
        </a>
      </div>

      {/* Support Section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontSize: "18px", fontWeight: "400" }}>
          Need Help? Our Support Team Is Available 24/7!
        </p>
        <a
          href="https://wa.me/+447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#3dad32",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px",
            color: "whitesmoke",
            margin: "5px 0",
          }}
        >
          <img
            style={{ verticalAlign: "middle", marginRight: "5px" }}
            width="30px"
            src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png"
            alt="WhatsApp Icon"
          />
          WhatsApp Now
        </a>
      </div>
    </div>
  );
};

export default EmailTemplateClient;
