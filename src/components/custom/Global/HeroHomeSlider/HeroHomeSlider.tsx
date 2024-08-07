/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zfSVWTW52wt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
              style={{ backgroundImage: `url('/placeholder.svg?height=800&width=1600')` }}
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
          <CarouselItem>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('/placeholder.svg?height=800&width=1600')` }}
            >
              <div className="flex flex-col items-center justify-center h-full px-4 text-center text-primary-foreground bg-primary/50">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Transform Your Ideas
                  </h1>
                  <p className="max-w-md text-lg md:text-xl">
                    Our platform empowers you to turn your vision into reality.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 mt-6 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('/placeholder.svg?height=800&width=1600')` }}
            >
              <div className="flex flex-col items-center justify-center h-full px-4 text-center text-primary-foreground bg-primary/50">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Elevate Your Digital Presence
                  </h1>
                  <p className="max-w-md text-lg md:text-xl">
                    Our platform helps you create a lasting impression online.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 mt-6 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-primary-foreground hover:text-primary">
          <ChevronLeftIcon className="h-8 w-8" />
          <span className="sr-only">Previous slide</span>
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-primary-foreground hover:text-primary">
          <ChevronRightIcon className="h-8 w-8" />
          <span className="sr-only">Next slide</span>
        </CarouselNext>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-primary-foreground/50 hover:bg-primary-foreground" />
          <div className="h-3 w-3 rounded-full bg-primary-foreground/50 hover:bg-primary-foreground" />
          <div className="h-3 w-3 rounded-full bg-primary-foreground/50 hover:bg-primary-foreground" />
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
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}