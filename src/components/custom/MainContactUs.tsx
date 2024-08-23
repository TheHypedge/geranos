"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const MainContactUs = () => {




const [fullName, setFullName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [message, setMessage] = useState<string>("");

 

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fullName,
      phoneNo,
      emailId,
      message,
    };

    console.log("Form Data:", formData); // Log form data for debugging

    try {
      const response = await fetch("/api/newmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("Failed to submit form data");
        return;
      }

      console.log("Form submitted successfully");
      // Handle success (e.g., clear form, show success message, etc.)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="p-8 bg-[#f6f6f68f] rounded-xl">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
            placeholder=""
          />
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phoneNo">Phone Number</Label>
          <Input
            type="text" // Changed to "text" for better handling of input
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            id="phoneNo"
            placeholder=""
          />
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            id="email"
            placeholder=""
          />
        </div>


 




        <div className="grid w-full gap-3">
            <Label htmlFor="message">Your message</Label>
            <Textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here." 
            id="message" />
        </div>


        <Button className="max-w-min" type="submit">Submit</Button>
      </form>
    </div>
  );

  
  
}

export default MainContactUs