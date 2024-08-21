import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
  return (
    <div className="mt-12">{router.query.slug}</div>
  )
}

export default Page