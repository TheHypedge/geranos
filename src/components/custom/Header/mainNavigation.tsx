"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const locations: { title: string; href: string; description: string }[] = [
 
  {
    title: "Punjab",
    href: "/docs/primitives/scroll-area",
    description: "Explore the Vibrant Culture and Scenic Beauty of Punjab!",
  },
  {
    title: "Uttarakhand",
    href: "/docs/primitives/tabs",
    description:
      "Discover the Landscapes and Spiritual Serenity of Uttarakhand!",
  },
]


const experiences: { title: string; href: string; description: string }[] = [
 
  {
    title: "Cultural",
    href: "/docs/primitives/scroll-area",
    description: "Explore the Vibrant Culture and Scenic Beauty of Punjab!",
  },
  {
    title: "Farmstay",
    href: "/docs/primitives/tabs",
    description:
      "Discover the Landscapes and Spiritual Serenity of Uttarakhand!",
  },
  {
    title: "Village life",
    href: "/docs/primitives/scroll-area",
    description: "Explore the Vibrant Culture and Scenic Beauty of Punjab!",
  },
  {
    title: "Nature Trails",
    href: "/docs/primitives/tabs",
    description:
      "Discover the Landscapes and Spiritual Serenity of Uttarakhand!",
  },  
]



export default function NavigationMenuDemo() {
  return (

    <>

    <NavigationMenu>
      <NavigationMenuList className="flex gap-0 xl:gap-8 flex-row">
       
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase tracking-wider">Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {locations.map((location) => (
                <ListItem
                  key={location.title}
                  title={location.title}
                  href={location.href}
                >
                  {location.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase tracking-wider">Offerings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {experiences.map((location) => (
                <ListItem
                  key={location.title}
                  title={location.title}
                  href={location.href}
                >
                  {location.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="uppercase tracking-wider">
                Blogs
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="uppercase tracking-wider">
                Contact us
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>



      </NavigationMenuList>
    </NavigationMenu>




    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
