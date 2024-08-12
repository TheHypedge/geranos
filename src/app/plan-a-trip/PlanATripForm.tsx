'use client'

import React from 'react'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import CalanderPicker from './SmallModules/CalanderPicker'
 

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import TypeOfTravel from './SmallModules/TypeOfTravel'
import PreferredGetaways from './SmallModules/PreferredGetaways'
import PreferredAccomodation from './SmallModules/PreferredAccomodation'
import CommunicationMethod from './SmallModules/CommunicationMethod'



const initialFields = [
    {
        label: 'Full Name', 
        component: 'INPUT', 
        type: 'text', 
        name: 'your-name',
        id: 'name',
        validation_error: false, 
        validation_message: '',
    },
    {
        label: 'Email ID', 
        component: 'INPUT', 
        type: 'email', 
        name: 'your-email',
        id: 'email',
        validation_error: false, 
        validation_message: '',        
    }, 
    {
        label: 'Phone Number', 
        component: 'INPUT', 
        type: 'phone', 
        name: 'your-phone',
        id: 'phone',
        validation_error: false, 
        validation_message: '',        
    },     
    {
        label: 'Message', 
        component: 'TEXTAREA', 
        type: 'text', 
        name: 'your-message',
        id: 'message',
        validation_error: false, 
        validation_message: '',        
    }, 
    {
        label: 'Message', 
        component: 'RADIO', 
        type: 'radio', 
        name: 'preferred-accomodation',
        id: 'preferred-accomodation',
        validation_error: false, 
        validation_message: '',        
    },     
    

    

]


const PlanATripForm = () => {




    const [fields, setFields] = useState(initialFields);
    const [finalMsg, setFinalMsg] = useState('');
    const handleSubmit = async(event:any) => {
        event.preventDefault(); 

        setFields(fields.map(field => ({
            ...field,
            validation_eror: false, 
            validation_message: '',
        })));

        const formData= new FormData(event.target);

        const reqOptions = {
            method: 'POST', 
            body: formData,
        }
        const req = await fetch('https://geranosgetaways.com/wp-json/contact-form-7/v1/contact-forms/160/feedback', reqOptions);
        const response = await req.json();


        if(!response) return alert('An unexpected error'); 

        if(response.invalid_fields && response.invalid_fields.length>0) {
            return setFields(fields.map(field => {
                const error = response.invalid_fields.find((x:any) => x.field === field.name);

                return{
                    ...field, 
                    validation_error: error ? true : false, 
                    validation_message: error ? error.message : '',
                };

            }));
        }

        setFinalMsg("Your message has been sent! Thanks..."); 


    }


  return (
    <div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[600px] m-auto w-full mb-4 bg-slate-50">

        {fields.map(field => (
            <fieldset key={field.id}>

                {field.component === "INPUT" && <Input type={field.type}  id={field.id} name={field.name}/>}
                
                
                {field.component === "TEXTAREA" && 
                /************ An Input Group ************/
                <div className="specilReqCstm flex flex-col gap-6">
                Special Request or Requirement
                <div className="flex flex-row gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">
                    <div className="grid w-full gap-4">
                        <Label htmlFor={field.id} >{field.label}</Label>
                        <Textarea placeholder="Type your message here." id={field.id} name={field.name}/>
                    </div>
                </div>
                </div>
                }



                {field.component === "RADIO" && 
                /************ An Input Group ************/
                
                <div className="specilReqCstm flex flex-col gap-6">
                Preferred Accomodation

                <div className="flex flex-row gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">

                    <PreferredAccomodation id={field.id}/>

                </div>
                </div>


                }





                {field.validation_error && <div className="text-sm text-red-700">{field.validation_message}</div>}
            </fieldset>

        ))}



Personal Information

<div className="flex flex-col gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">

    <div className="grid w-full max-w-full items-center gap-4">
    <Label htmlFor="name">Full Name</Label>
    <Input type="text" id="name" placeholder="" />
    </div>

    <div className="grid w-full max-w-full items-center gap-4">
    <Label htmlFor="email">Email ID</Label>
    <Input type="email" id="email" placeholder="" />
    </div>

    <div className="grid w-full max-w-full items-center gap-4">
    <Label htmlFor="phone">Phone Number</Label>
    <Input type="phone" id="phone" placeholder="" />
    </div>

</div>


    {/************ An Input Group ************/}

    Your Idea for a Getaway

    <div className="flex flex-col gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">

        <div className="grid w-full max-w-full items-center gap-4">
            <Label htmlFor="name">Type of Travel</Label>
            <TypeOfTravel/>
        </div>

        <div className="grid w-full max-w-full items-center gap-4">
            <Label htmlFor="name">Preferred Getaways</Label>
            <PreferredGetaways/>
            <Input type="text" id="other-getaways" placeholder="Mention your Getaway" />
        </div>    

    </div>




    {/************ An Input Group ************/}

    Preferred Destination

    <div className="flex flex-row gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">

    <div className="grid w-full max-w-full items-center gap-4">
    <Label htmlFor="phone">Within India</Label>
    <Input type="phone" id="phone" placeholder="Name Of Destination" />
    </div>

    <div className="grid w-full max-w-full items-center gap-4">
    <Label htmlFor="phone">Others</Label>
    <Input type="phone" id="phone" placeholder="Name Of Destination" />
    </div>

    </div>



    {/************ An Input Group ************/}

    Travel Dates

    <div className="flex flex-row gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">

        <CalanderPicker/>

        <CalanderPicker/>

    </div>








    {/************ An Input Group ************/}
    <div className="specilReqCstm">
    Special Request or Requirement
    <div className="flex flex-row gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">
        <div className="grid w-full gap-4">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
    </div>
    </div>




    {/************ An Input Group ************/}

    Preferred Method of Communication

    <div className="flex flex-row gap-6 border p-6 rounded-xl bg-[rgba(255,255,255,0.6)]">

    <CommunicationMethod/>

    </div>








    {/************ An Input Group ************/}

            <Input type="hidden" className="hidden" name="_wpcf7_unit_tag" value="wpcf7-f784-p785-o1"/>



            <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">By submitting this form, you agree to our <Link target="_blank" className="text-[#246BEB]" href="/terms-of-use">terms and conditions</Link>.
        </Label>
      </div>
    </div>




            <Button type="submit" className="max-w-min">Send Me A Plan</Button>

            {finalMsg && <div className="text-md bg-green-700 text-white p-2 rounded">{finalMsg}</div>}
        </form>

    </div>
  )
}

export default PlanATripForm