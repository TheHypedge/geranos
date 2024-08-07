/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zfSVWTW52wt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselIndicators, CarouselIndicator } from "@/components/ui/carousel"
import Link from "next/link"

export default function Component() {




  return (
    <section className="w-full aCstmClass">
      <Carousel
        className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh]"
        opts={{ loop: true, autoplay: true, autoplaySpeed: 5000 }}
      >
        <CarouselContent className="h-full">

          <CarouselItem className="h-full">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('https://images.pexels.com/photos/12656946/pexels-photo-12656946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
            >
              <div className="flex flex-col items-center justify-center h-full px-4 text-center text-primary-foreground bg-primary/50">
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl pb-4 tracking-wider">
                    Punjab
                  </h1>
                  <p className="max-w-md text-lg md:text-2xl m-auto pb-8">
                    The land of Temples and Culture test
                  </p>
                </div>
                <Link
                  href="#"
                  className=""
                  prefetch={false}
                >
                  <Button className="p-4 font-normal text-2xl bg-none border-2 border-white text-white p-6 rounded-full">Explore</Button>
                </Link>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('./banners/contact.jpg')` }}
            >
              <div className="flex flex-col items-center justify-center h-full px-4 text-center text-primary-foreground bg-primary/50">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Unleash Your Creativity
                  </h1>
                  <p className="max-w-md text-lg md:text-xl">
                    Discover the power of our platform to bring your ideas to life.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 mt-6 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </CarouselItem>

        </CarouselContent>

        <div className="PrevNextBtnCstmCls">
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-primary-foreground hover:text-primary">
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-primary-foreground hover:text-primary">
        </CarouselNext>
        </div>

      </Carousel>
    </section>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 40 40"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}