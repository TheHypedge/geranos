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
    Hr,
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
    prefGetawayVal: string; 
    locIndiaVal: string; 
    locAbroadVal: string; 
    startDateVal: string; 
    endDateVal: string; 
    prefAccomVal: string;
    specialReqVal: string; 
    metOfCommVal: string;
  }
  
  const baseUrl = 'https://demo.react.email/'
  

  
  export const NetlifyWelcomeEmail = ({
    firstName, emailId, mobileNo, travelTypeVal, prefGetawayVal, locIndiaVal, locAbroadVal, startDateVal, endDateVal, prefAccomVal, specialReqVal, metOfCommVal 
  }: NetlifyWelcomeEmailProps) => {
    return (
      <Html>

        <Tailwind>
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">

        <Head>
            <title>My email title</title>
        </Head>


        
        <Preview>New Plan a tour request.</Preview>


        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              New <strong>Plan a tour</strong> request
        </Heading>

        <Hr />

        <p>Name: {firstName}</p>
 
        <p>Email ID: {emailId}</p>
     
        <p>Phone No: {mobileNo}</p>
     
        <p>Travel Type: {travelTypeVal}</p>
     
        <p>Preferred Getaway: {prefGetawayVal}</p>
   
        <p>Location India: {locIndiaVal}</p>
    
        <p>Location Abroad: {locAbroadVal}</p>
   
        <p>Start Date: {startDateVal}</p>
     
        <p>End Date: {endDateVal}</p>
    
        <p>End Date: {prefAccomVal}</p>
      
        <p>Special Request: {specialReqVal}</p>
   
        <p>Methoda of Communiation: {metOfCommVal}</p>


        <div className="flex align-middle justify-center">
        <Button
                className="bg-[#000000] max-w-min min-w-[120px] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3 mb-2 mx-auto"
                href={`tel:${{mobileNo}}`}
              >        
        Call The Prospect
        </Button>
        </div>

        <Hr />

        <p className="text-center">Geranos Getaways ・ Chandigarh ❤️ IN</p>

        </Container>
        </Tailwind>
      </Html>
    );
  };
  
  export default NetlifyWelcomeEmail;
  