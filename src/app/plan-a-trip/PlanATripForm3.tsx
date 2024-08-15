'use client'

import React from 'react'
import { useState } from 'react'


/* Dependencies for validation */

import * as z from 'zod'; 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

/* ShadCN dependencies */

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X } from 'lucide-react';
/* Form Schema */ 

const formSchema = z.object({
  fullName: z.string(),  
  emailAddress: z.string().email(), 
  mobileNumber: z.number(),
  travelType: z.string(), 
});




const PlanATripForm = () => {



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      mobileNumber: 0,
      travelType: "", 
    }
  }) 




const handleFormSubmit = async (e:any) => {
  e.preventDefault();

  console.log("test", FormData); 
  const response = await fetch('/api/newlead', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(FormData),
  })
  if(response.status === 2000) {
    setFormData({
      fullName: "", 
      emailAddress: "",
      mobileNumber: "",
      travelType: "", 
    }); 
  }
  console.log("AFTER SUBMIT DATA SENT TO RESEND API"); 
}


/* Experimental Usestate */ 


let initialFormValues = {
  fullName: "", 
  emailAddress: "",
  mobileNumber: "", 
  travelType: "", 
}

const [FormData, setFormData] = useState(initialFormValues); 


let nowValName, nowValEmail, nowValmobileNumber, nowValTravelType;

const  onFormUpdes = (e:any) => {

  nowValName =  document.getElementById('fullNameVal').value;
  nowValEmail = document.getElementById('emailIdVal').value; 
  nowValmobileNumber = document.getElementById('mobileNumberVal').value;
  nowValTravelType = document.querySelector('.travelTypeCstm button[data-state|="checked"]').value; 

  setFormData({
    fullName: nowValName,
    emailAddress: nowValEmail,
    mobileNumber: nowValmobileNumber, 
    travelType: nowValTravelType, 
  });

  console.log({
    fullName: nowValName,
    emailAddress: nowValEmail,
    mobileNumber: nowValmobileNumber, 
    travelType: nowValTravelType, 
  });


}; 



  return (
    <div className="">


    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="flex flex-col p-6 gap-6 max-w-[600px] rounded-xl m-auto w-full mb-4 bg-slate-50">



      <p className="font-bold">Personal Information</p>

      <div className="flex flex-col gap-6 bg-[rgba(255,255,255,0.4)] p-6 border-2 rounded-xl">


        <FormField 
            control={form.control} 
            name="fullName" 
            render={({field}) => {
                return (
                  <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      id="fullNameVal"
                      placeholder="" 
                      type="text" 
                      onChange={onFormUpdes}
                      
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
                );
            }}
            />



            <FormField 
            control={form.control} 
            name="emailAddress" 
            render={({field}) => {
                return (
                  <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      id="emailIdVal"
                      placeholder="" 
                      type="email" 
                      onChange={onFormUpdes}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
                );
            }}
            />



            <FormField 
            control={form.control} 
            name="mobileNumber" 
            render={({field}) => {
                return (
                  <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      id="mobileNumberVal"
                      placeholder="" 
                      type="tel" 
                      onChange={onFormUpdes}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
                );
            }}
            />



      </div>


      <p className="font-bold">Personal Information</p>


      <div className="flex flex-col gap-6 bg-[rgba(255,255,255,0.4)] p-6 border-2 rounded-xl">





          <RadioGroup defaultValue="comfortable" onChange={onFormUpdes}>
          <div className="travelTypeCstm flex items-center space-x-2">
            <RadioGroupItem value="solo-women" id="r1" />
            <Label htmlFor="r1">Solo Women</Label>
          </div>
          <div className="travelTypeCstm flex items-center space-x-2">
            <RadioGroupItem value="solo-men" id="r2" />
            <Label htmlFor="r2">Solo Men</Label>
          </div>
          <div className="travelTypeCstm flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>




      </div>



            <Button type="submit" className="max-w-min">Send Me A Plan</Button>

        </form>
      </Form>

    </div>
  )
}

export default PlanATripForm