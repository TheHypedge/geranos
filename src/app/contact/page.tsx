import ContactForm from '@/components/custom/Contact/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-[400px] flex flex-col my-12 mb-0">
        <div className="bg-[url('/global/banners/contact.jpg')] flex aling-middle justify-center gap-4 text-center min-h-[320px] flex-col px-4 py-12 bg-slate-50">
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p>We are happy to assist!</p>
        </div>

        <div>

            <ContactForm/>

        </div>

    </div>
  )
}

export default Page