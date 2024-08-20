import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'

const BlogPage = () => {
  return (
    <div>



        <div className="bg-cover bg-[url('/global/banners/contact-3.jpg')]  min-h-[420px]  bg-slate-50">
            <div className="bg-[rgba(0,0,0,0.3)] flex aling-middle justify-center gap-6 text-center flex-col min-h-[420px] px-4 py-12">
            <h1 className="text-white text-5xl font-semibold">Contact Us</h1>
            <p className="text-white text-xl">We are happy to assist journeys and life experiences!</p>
            
            <Link href="#cstmContId" id="cstmContId" className="">
              <Button className="max-w-min mx-auto font-normal text-2xl bg-transparent hover:bg-transparent border-2 border-white text-white p-6 rounded-full">
                Message ↓
              </Button>
            </Link>
            </div>
        </div>


    </div>
  )
}

export default BlogPage