"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PlanATripForm5 = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>(""); // Change to string for consistency
  const [emailId, setEmailId] = useState<string>("");
  const [preMOC, setPreMOC] = useState<string>("comfortable");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreMOC(event.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fullName,
      phoneNo,
      emailId,
      preMOC,
    };

    console.log("Form Data:", formData); // Log form data for debugging

    try {
      const response = await fetch("/api/newlead", {
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
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
            placeholder=""
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phoneNo">Phone Number</Label>
          <Input
            type="text" // Changed to "text" for better handling of input
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            id="phoneNo"
            placeholder=""
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label>Select an option</Label>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="comfortable"
              name="preMOC"
              value="comfortable"
              checked={preMOC === "comfortable"}
              onChange={handleOptionChange}
            />
            <Label htmlFor="comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="compact"
              name="preMOC"
              value="compact"
              checked={preMOC === "compact"}
              onChange={handleOptionChange}
            />
            <Label htmlFor="compact">Compact</Label>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default PlanATripForm5;