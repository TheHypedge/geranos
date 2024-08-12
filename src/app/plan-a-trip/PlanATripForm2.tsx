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




const PlanATripForm2 = () => {





    const handleSubmit = async(event:any) => {
      

    }


  return (
    <div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[600px] m-auto w-full mb-4 bg-slate-50">




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

        </form>

    </div>
  )
}

export default PlanATripForm2