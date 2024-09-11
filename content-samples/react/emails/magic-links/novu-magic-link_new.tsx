import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} 
from "@react-email/components";
import * as React from "react";


interface LoginEmailProps {
  loginLink?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const LoginEmail = ({ loginLink }: LoginEmailProps) => {


return (
  <Html>
          <Head>
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
               @keyframes moveRightToLeft {
              0% { transform: translateX(100%); } /* התחלה מימין */
              100% { transform: translateX(0); }  /* סיום במיקום המקורי */
            }
          `}
        </style>
      </Head>
    <Preview>Access your account with this link</Preview>
    <Body style={mainStyle}>
      <Container style={containerStyle}>
        <Img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
          width={60}
          height={60}
          alt="Company Logo"
          style={{ marginBottom: "20px" }}
        />
        <Heading style={headingStyle}>✌️ Hii</Heading>
        <Section style={bodyStyle}>
          <Text style={textStyle}>
          <Link style={buttonStyle} href={loginLink}>
                🔗 Click here to access your account
              </Link>
          </Text>
          <Text style={textStyle}>
            If this wasn't requested by you, please disregard this message.
          </Text>
          {}
              <div style={{
               //backgroundColor: "red",  // צבע רקע אדום 
                padding: "20px",
                marginTop: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontSize: "18px",
                animation: "fadeIn 3s ease-in-out, moveRightToLeft 5s ease-in-out", 
              }}>
                🎉 Welcome! 🎉
              </div>
           
        </Section>
        <Text style={textStyle}>
          Regards,
          <br />- The Team
        </Text>
    {/* <Hr style={hrStyle} /> */}

        <Img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
          height={40}
          style={{
            filter: "grayscale(80%)",
            margin: "15px 0",
          }}
        />
        <Text style={footerStyle}>Your Company Name</Text>
        <Text style={footerStyle}>
        Have a good day😊
        </Text>
      </Container>
    </Body>
  </Html>
 );
};

LoginEmail.PreviewProps = {
  loginLink: "https://novu.co",
} as LoginEmailProps;

export default LoginEmail;

const mainStyle = {
  backgroundColor: "#eaf0f6", // צבע רקע רך יותר
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  padding: "40px 0", // ריווח נוסף
};

const containerStyle = {
  margin: "0 auto",
  padding: "30px", // יותר padding
  backgroundColor: "#ffffff",
  borderRadius: "12px", // פינות מעוגלות יותר
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // צללה קלה
  maxWidth: "650px", // קצת יותר רחב
};

const headingStyle = {
  fontSize: "28px", // כותרת גדולה יותר
  fontWeight: "bold",
  marginTop: "20px",
  textAlign: "center" as const,
  color: "#333", // צבע כהה יותר
};

const bodyStyle = {
  margin: "40px 0",
  textAlign: "center" as const,
};

const textStyle = {
  fontSize: "16px", // טקסט מעט גדול יותר
  lineHeight: "26px",
  color: "#555", // טקסט בגוון אפור כהה יותר
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "20px",
};

const hrStyle = {
  borderColor: "#dddddd",
  marginTop: "40px",
};

const footerStyle = {
  color: "#888",
  fontSize: "12px",
  textAlign: "center" as const,
};
