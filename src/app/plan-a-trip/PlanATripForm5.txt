'use client'

import React from 'react'

import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


import { useState } from "react";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type FormValues = {
  fullname: string
  email: string
  phone: string
  gender: string
  typeoftravel: string
}

const PlanATripForm5 = () => {

  const [date, setDate] = React.useState<Date>()

  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data:FormValues) => {
    console.log('Form Submitted', data);
  }

  const radioButton = (e:any) => {
    console.log(e); 

  }





  return (
    <div>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>


        <p className="font-bold">Personal Information <span className="text-red-600">*</span></p>

        <div className="flex flex-col gap-6 bg-[rgba(255,255,255,0.4)] p-6 border-[1px] rounded-xl">

          <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="fullname">Full Name</Label>
          <Input type="text" id="fullname" {...register("fullname")}  />
          </div>


          <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email ID</Label>
          <Input type="email" id="email" {...register("email")}  />
          </div>


          <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel"  id="phone" {...register("phone")}  />
          </div>

        </div>



        <p className="font-bold">Type of travel <span className="text-red-600">*</span></p>

        <div className="flex flex-col gap-6 bg-[rgba(255,255,255,0.4)]  rounded-xl">
        <div>
       
       
       


            <div className="flex flex-col bg-[rgba(255,255,255,0.4)] p-6 border-2 rounded-xl">
              <RadioGroup>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Solo Women" id="r1" />
                  <Label htmlFor="r1">Solo Women</Label>
                </div>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Solo Men" id="r2" />
                  <Label htmlFor="r2">Solo Men</Label>
                </div>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Couple" id="r3" />
                  <Label htmlFor="r3">Couple</Label>
                </div>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Family" id="r4" />
                  <Label htmlFor="r4">Family</Label>
                </div>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Family" id="r5" />
                  <Label htmlFor="r5">Group</Label>
                </div>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Business" id="r6" />
                  <Label htmlFor="r6">Business</Label>
                </div>
                <div className="travelTypeCstm flex items-center space-x-2">
                <input {...register("typeOfTravel")} type="radio" value="Seniors" id="r7" />
                  <Label htmlFor="r7">Seniors</Label>
                </div>
              </RadioGroup>
            </div>




            




            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  fromDate={new Date()} 
                  onSelect={setDate}
                  initialFocus
                  value="test"
                  {...register("fromDate")} 
                />
              </PopoverContent>
            </Popover>





        </div>

        </div>



        <Button type="submit">Submit</Button>

      </form>
      <DevTool control={control}/>


    </div>
  )
}

export default PlanATripForm5