/**
 * v0 by Vercel.
 * @see https://v0.dev/t/caxZN8MSFN4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from 'next/image'

export default function Component() {
  return (
    <Card className="border-none shadow-none w-full grid gap-6">
      <div className="flex items-center gap-4">
        <Image src="/global/social/x.png" className="rounded-full shadow-sm bg-red-700" alt="Testimonial Image" width="80" height="80"/> 
        <div className="grid gap-2">
          <div className="font-semibold">John Doe</div>
          <div className="text-sm text-muted-foreground">CEO, Acme Inc.</div>
        </div>
      </div>
      <blockquote className="text-md leading-relaxed md:text-md">
        &ldquo;The service and support I received from this company was exceptional. They went above and beyond to
        ensure my needs were met.&rdquo;
      </blockquote>
    </Card>
  )
}