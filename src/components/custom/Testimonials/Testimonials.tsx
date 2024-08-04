/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SblkuaiPzdY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <section className="w-full ">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">Cathy Nguyen</h4>
              <p className="text-sm text-muted-foreground">Product Manager, Acme Inc.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-md leading-relaxed">
            "The team at Acme has been incredible to work with. They really\n understand our needs and have helped us
            streamline our processes."
          </blockquote>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@jaredpalmer" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">Jared Palmer</h4>
              <p className="text-sm text-muted-foreground">CTO, Acme Inc.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-md leading-relaxed">
            "I've been using Acme's products for years and they've always\n exceeded my expectations. The support team
            is top-notch."
          </blockquote>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">Shu Ding</h4>
              <p className="text-sm text-muted-foreground">CEO, Acme Inc asd.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-md leading-relaxed">
            "Acme has been a game-changer for our business. Their pr has been a game-changer for our business. Their pr oducts are\n reliable, and their team is always
            there to support us."
          </blockquote>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">Max Leiter</h4>
              <p className="text-sm text-muted-foreground">Designer, Acme Inc.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-md leading-relaxed">
            "Acme's products have made my job so much easier. The design\n quality made my job so much easier. The design\n quality is top-notch, and the customization
            options are endless."
          </blockquote>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">Cathy Nguyen</h4>
              <p className="text-sm text-muted-foreground">Product Manager, Acme Inc.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-md leading-relaxed">
            "The team at Acme has been incredible to work with. They really\n understand our needs and have helped us
            streamline our processes."
          </blockquote>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@jaredpalmer" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold">Jared Palmer</h4>
              <p className="text-sm text-muted-foreground">CTO, Acme Inc.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-md leading-relaxed">
            "I've been using Acme's products for year "I've been using Acme's products for years and they've always\n exceeded my expectations. The support team
            is top-notch."
          </blockquote>
        </div>
      </div>
    </section>
  )
}