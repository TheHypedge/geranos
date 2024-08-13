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



import { NextResponse } from "next/server";
import { Resend } from 'resend'
import { NetlifyWelcomeEmail } from '../../components/custom/EmailTemplateTwo'


const PlanATripForm2 = () => {

const [FormData, setFormData] = useState({
  firstname: "HIMANSHUKASHYAP", 
  emailid: "HKASHYAP.DEVELOPER@GMAIL.COM",
}); 


const handleFormSubmit = async (e:any) => {

  e.preventDefault(); 

  console.log(FormData); 


  const response = await fetch('/api/newlead', {

    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(FormData),
  })

  if(response.status === 2000) {
    setFormData({
      name: "", 
      emailid: "",
    }); 
  }

  console.log("IN THE END IT DOESN'T EVEN MATTER"); 
}




  return (
    <div>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 max-w-[600px] m-auto w-full mb-4 bg-slate-50">





            <Button type="submit" className="max-w-min">Send Me A Plan</Button>

        </form>

    </div>
  )
}

export default PlanATripForm2