import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";

  import * as React from "react";
  
  interface NetlifyWelcomeEmailProps {
    firstName: string; 
    emailId: string; 
    mobileNo: string; 
    travelTypeVal: string; 
  }
  
  const baseUrl = 'https://demo.react.email/'
  

  
  export const NetlifyWelcomeEmail = ({
    firstName, emailId, mobileNo, travelTypeVal
  }: NetlifyWelcomeEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Netlify Welcome</Preview>
        <h1>Hi: {firstName}</h1>
        <h1>EmailID: {emailId}</h1>
        <h1>Phone No: {mobileNo}</h1>
        <h1>Travel Type: {travelTypeVal}</h1>
      </Html>
    );
  };
  
  export default NetlifyWelcomeEmail;
  