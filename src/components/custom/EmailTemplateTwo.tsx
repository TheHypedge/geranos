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
  }
  
  const baseUrl = 'https://demo.react.email/'
  

  
  export const NetlifyWelcomeEmail = ({
    firstName
  }: NetlifyWelcomeEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Netlify Welcome</Preview>
        <h1>Hi, {firstName}</h1>
      </Html>
    );
  };
  
  export default NetlifyWelcomeEmail;
  