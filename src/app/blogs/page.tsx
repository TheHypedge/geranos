import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import SingleBlogCard from './SingleBlogCard'

export const revalidate = 10

const BlogPage = async() => {


  const req = await fetch(`https://geranosgetaways.com/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,slug,date,excerpt,acf`, { cache: 'no-store' } ); 
  const blogs = await req.json(); 
  const blog = blogs[0]; 
  let d = new Date(blog.date);


  return (

    <div>

        <div className="bg-cover bg-[url('/global/banners/contact-6.jpg')] bg-top min-h-[420px]  bg-slate-50">
            <div className="bg-[rgba(0,0,0,0.4)] flex aling-middle justify-center gap-6 text-center flex-col min-h-[420px] px-4 py-12">
            <h1 className="text-white text-5xl font-semibold">Our Blogs</h1>
            <p className="text-white text-xl">Read and learn more about us.</p>
            
            <Link href="#cstmContId" id="cstmContId" className="">
              <Button className="max-w-min mx-auto font-normal text-2xl bg-transparent hover:bg-transparent border-2 border-white text-white p-6 rounded-full">
                Read Blog ↓
              </Button>
            </Link>
            </div>
        </div>




        <SingleBlogCard 
        title={blog.title.rendered} 
        date={d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()}
        excerpt={blog.excerpt.rendered}
        slug={blog.slug}
        image={blog.acf.mobile_featured_image}
        />




    </div>
  )
}

export default BlogPage