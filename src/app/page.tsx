

import Image from "next/image";
import HeroBanner from '@/components/custom/HeroBanner/heroBanner'
import TextReveal from "@/components/custom/TextReveal/TextReveal";
import TextAndImage from "@/components/custom/Content/TextAndImage/TextAndImage";
import DestinationsCards from "@/components/custom/Content/DestinationsCards/DestinationsCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner/>
      <TextAndImage/>  
      <div className="mb-8">  

        <DestinationsCards acfPostTypeSlug="destinations" cardTitle="Destinations" />
      </div>

    </main>
  );
}
